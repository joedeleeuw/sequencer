import * as React from 'react';
import { css } from 'emotion';
import { map } from 'lodash';
import Hit from './Hit';

interface InstrumentProps {
  numSteps: number;
  tone: any;
  currLoop: number;
  currPreset: number;
  steps: Array<boolean>;
}

interface InstrumentState {
  steps: Array<boolean>;
}

export default class Instrument extends React.Component<InstrumentProps, InstrumentState> {
  state: InstrumentState = { steps: this.props.steps };
  handleToggleHit = (step, i) => {
    const { steps } = this.state;
    this.setState({ steps: [...steps.slice(0, i), !steps[i], ...steps.slice(i + 1)] });
  };
  componentWillReceiveProps({
    currLoop: nextLoopPos,
    currPreset: nextPreset,
    steps
  }: InstrumentProps) {
    const { currLoop, currPreset } = this.props;
    if (nextLoopPos !== currLoop) this.findAndPlayStep(currLoop);
    if (nextPreset !== currPreset) this.setState({ steps });
  }
  findAndPlayStep = step => {
    const { steps } = this.state;
    const { tone } = this.props;
    const isHit = steps[step - 1];
    // TODO: Fix sound: I think sound is broken? The timing is off at least.
    if (isHit) tone.triggerAttackRelease();
  };
  render() {
    const { steps } = this.state;
    return (
      <div
        className={css`
          width: 100%;
          height: 100%;
          display: flex;
          flex: 1;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        `}
      >
        {map(steps, (step, i) => (
          <Hit onToggleHit={() => this.handleToggleHit(step, i)} isActive={!!step} />
        ))}
      </div>
    );
  }
}

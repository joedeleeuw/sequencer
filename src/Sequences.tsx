import * as React from 'react';
import { css } from 'emotion';
import { map } from 'lodash';
import Presets from './Presets';
import genPresets from './helpers/genPresets';
import Instrument from './Instrument';
import StepsHeader from './StepsHeader';
import instrumentList from './helpers/instruments';

interface SequencesProps {
  currLoop: number;
  numSteps: number;
}
interface SequencesState {
  currPreset: number;
  presets: boolean[][];
}
export default class Sequences extends React.Component<SequencesProps, SequencesState> {
  state: SequencesState = {
    currPreset: 0,
    presets: genPresets(this.props.numSteps)
  };
  render() {
    const { currLoop, numSteps } = this.props;
    const { currPreset, presets } = this.state;
    return (
      <div
        className={css`
          display: flex;
          width: 100%;
        `}
      >
        <Presets
          style={{ flex: 0.1 }}
          presets={presets}
          onUpdatePreset={currPreset => {
            this.setState({ currPreset });
          }}
        />
        <div
          className={css`
            display: flex;
            flex: 0.9;
          `}
        >
          <div
            className={css`
              display: flex;
              margin-top: 75px;
              flex-direction: column;
              justify-content: space-evenly;
            `}
          >
            {map(instrumentList, (instrument, i) => <p>{instrument.title}</p>)}
          </div>
          <div
            className={css`
              display: flex;
              flex: 1;
              flex-direction: column;
            `}
          >
            <StepsHeader numSteps={numSteps} currLoop={currLoop} />
            {instrumentList.map(({ sound }, i) => (
              <div style={{ padding: '10px' }}>
                <Instrument
                  key={i}
                  tone={sound}
                  steps={presets[currPreset]}
                  numSteps={numSteps}
                  currLoop={currLoop}
                  currPreset={currPreset}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

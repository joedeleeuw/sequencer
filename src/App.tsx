import * as React from 'react';

import { css } from 'emotion';
import './App.css';
import Sequences from './Sequences';
import TempoContainer from './TempoContainer';
import LoopController from './LoopController';
import BPMController from './BPMController';

const NUM_STEPS = 16;

interface AppState {
  currLoop: number;
}
class App extends React.Component<{}, AppState> {
  constructor(props: object) {
    super(props);
    this.state = {
      currLoop: undefined
    };
  }
  handleUpdateLoopPos = newLoopPos => {
    this.setState({ currLoop: newLoopPos });
  };
  render() {
    const { currLoop } = this.state;
    return (
      <div
        className={css`
          height: 100%;
          width: 100%;
        `}
      >
        <header className="App-header">
          <h1 className="App-title">Sequencer 🥁</h1>
        </header>
        <div
          className={css`
            height: 100%;
            width: 100%;
            margin: 0 auto;
            padding: 20px 0;
            max-width: 1200px;
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
            flex-direction: column;
          `}
        >
          <TempoContainer onUpdateLoopPos={this.handleUpdateLoopPos}>
            <LoopController numBeats={NUM_STEPS} />
            <BPMController />
          </TempoContainer>
          <Sequences currLoop={currLoop} numSteps={NUM_STEPS} />
        </div>
      </div>
    );
  }
}

export default App;

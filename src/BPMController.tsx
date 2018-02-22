import * as React from 'react';
import { css } from 'emotion';

interface BPMProps {
  tempo?: number;
  onUpdateTempo?: (n: number) => void;
}

export default class BPMController extends React.Component<BPMProps, {}> {
  render() {
    const { tempo, onUpdateTempo } = this.props;
    return (
      <div
        className={css`
          display: flex;
          margin: 20px;
          padding: 0 20px;
        `}
      >
        <button onClick={() => onUpdateTempo(tempo - 1)}>-</button>
        <p style={{ padding: '8px' }}>{tempo}</p>
        <button onClick={() => onUpdateTempo(tempo + 1)}>+</button>
      </div>
    );
  }
}

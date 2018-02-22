import * as React from 'react';
import { css } from 'emotion';

interface HitProps {
  isActive: boolean;
  onToggleHit: Function;
}

export default class Hit extends React.Component<HitProps, {}> {
  render() {
    const { isActive, onToggleHit } = this.props;
    return (
      <button
        onClick={e => {
          e.stopPropagation();
          onToggleHit();
        }}
        className={css`
          z-index: 9;
          width: 45px;
          height: 45px;
          background: ${isActive ? '#ec3a4a' : ' #fff7d6'};
        `}
      >
        <p>hi</p>
      </button>
    );
  }
}

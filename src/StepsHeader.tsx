import * as React from 'react';
import { map } from 'lodash';
import { css } from 'emotion';
import Instruments from './helpers/instruments';

interface StepsHeaderProps {
  numSteps: number;
  currLoop: number;
}
export default class extends React.Component<StepsHeaderProps, {}> {
  render() {
    const { numSteps, currLoop } = this.props;
    return (
      <div
        className={css`
          display: flex;
          flex: 1;
          padding: 10px;
          justify-content: space-between;
          align-items: center;
          z-index: 0;
        `}
      >
        {map(new Array(numSteps), (step, i) => (
          <div
            className={css`
              display: block;
              position: relative;
              width: 45px;
              height: 45px;
              display: flex;
              justify-content: center;
              align-items: center;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                width: 100%;
                background: ${currLoop === i ? '#E3E0D9' : 'transparent'};
                height: calc(${Instruments.length + 1} * 60px);
                opacity: ${currLoop % 2 === 0 ? 0.6 : 0.25};
              `}
            />
            {i + 1}
          </div>
        ))}
      </div>
    );
  }
}

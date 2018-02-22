import * as React from 'react';
import { css } from 'react-emotion';
import { map } from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

interface PresetsProps {
  onUpdatePreset: (n: number) => void;
  presets: boolean[][];
  style: object;
}
interface PresetsState {
  value: number;
}
export default class Presets extends React.Component<PresetsProps, PresetsState> {
  state: PresetsState = { value: 0 };

  handleChange = (event, index, value) => {
    this.setState({ value }, () => this.props.onUpdatePreset(value));
  };

  render() {
    const { value } = this.state;
    const { presets, style } = this.props;
    return (
      <div
        style={style}
        className={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {/* TODO: use material-ui@next here so we can nix the provider. 
          Tried @next and ran into an invalid children bug(?) 
          related issue here: https://github.com/mui-org/material-ui/issues/8190 */}
        <MuiThemeProvider>
          <DropDownMenu value={value} onChange={this.handleChange}>
            {map(presets, (n, i) => (
              <MenuItem
                style={{
                  padding: '5px'
                }}
                value={i}
                primaryText={`Preset ${i}`}
                key={`item-${i}`}
              />
            ))}
          </DropDownMenu>
        </MuiThemeProvider>
      </div>
    );
  }
}

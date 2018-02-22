import * as React from 'react';

interface TempoProps {
  children: Array<Object> | Object;
  onUpdateLoopPos?: Function;
}
interface TempoState {
  tempo: number;
}

export default class TempoContainer extends React.Component<TempoProps, TempoState> {
  state: TempoState = {
    tempo: 60
  };

  handleUpdateTempo = tempo => {
    this.setState({ tempo });
  };

  render() {
    const { tempo } = this.state;
    const { children, onUpdateLoopPos } = this.props;
    return React.Children.map(children, (node: React.ReactNode) =>
      React.cloneElement(node as React.ReactElement<any>, {
        tempo,
        onUpdateLoopPos,
        onUpdateTempo: this.handleUpdateTempo
      })
    );
  }
}

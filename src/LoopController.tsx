import * as React from 'react';
import Tone from 'tone';
import styled, { css } from 'react-emotion';

interface LoopControllerProps {
  tempo?: number;
  numBeats: number;
  onUpdateTempo?(tempo: number): void;
  onUpdateLoopPos?(loopPos: number): void;
}

const StyledButton = styled('button')`
  border: none;
  background: none;
`;
export default class LoopController extends React.Component<LoopControllerProps> {
  static defaultProps = {
    tempo: 60
  };
  loop: any;

  constructor(props: LoopControllerProps) {
    super(props);
    this.state = {};
    Tone.Transport.bpm.value = props.tempo;
    Tone.Transport.loop = true;
    Tone.Transport.loopStart = 0;
    Tone.Transport.loopEnd = '4m';
    this.componentDidMount = this.componentDidMount.bind(this);
  }
  componentDidMount() {
    this.loop = new Tone.Loop(this.handleUpdateLoopPos, '4n');
    this.loop.start();
  }
  componentWillReceiveProps({ tempo: newTempo }: LoopControllerProps) {
    const { tempo } = this.props;
    // NOTE: I don't know the implications ~musically~ of having
    // a 4 second ramp up time i just picked 4 because it felt right
    if (newTempo !== tempo) Tone.Transport.bpm.rampTo(newTempo, 4);
  }
  handlePause = e => {
    e.preventDefault();
    Tone.Transport.stop();
  };
  handlePlay = () => {
    Tone.Transport.start();
  };
  handleUpdateLoopPos = () => {
    const { numBeats } = this.props;
    // 16 is the number of beats per loop
    this.props.onUpdateLoopPos(Tone.Transport.progress * numBeats);
  };
  render() {
    return (
      <div
        className={css`
          display: flex;
          flex: 1;
          justify-content: center;
        `}
      >
        <StyledButton title="pause">
          {/*TODO: use relative paths for image src so we can use file-loader 
          and image-loader to inline (base64 encode) small images*/}
          <img
            src={`${process.env.PUBLIC_URL}/pause-button.png`}
            onClick={this.handlePause}
            className={css`
              width: 64px;
              height: 64px;
            `}
          />
        </StyledButton>
        <StyledButton title="play">
          <img
            src={`${process.env.PUBLIC_URL}/play-button.png`}
            title="play"
            onClick={this.handlePlay}
            className={css`
              width: 64px;
              height: 64px;
            `}
          />
        </StyledButton>
      </div>
    );
  }
}

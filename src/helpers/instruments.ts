import Tone from 'tone';

export default [
  {
    sound: new Tone.Synth({
      oscillator: {
        type: 'triangle8',
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4
      }
    }).toMaster(),
    title: 'triangle 8'
  },
  {
    sound: new Tone.Synth({
      oscillator: {
        type: 'triangle8',
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4
      }
    }).toMaster(),
    title: 'kick 8'
  },
  {
    sound: new Tone.Synth({
      oscillator: {
        type: 'triangle8',
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4
      }
    }).toMaster(),
    title: 'closed hat 8'
  },
  {
    sound: new Tone.Synth({
      oscillator: {
        type: 'triangle8',
        modulationType: 'sawtooth',
        modulationIndex: 3,
        harmonicity: 3.4
      }
    }).toMaster(),
    title: 'hat hat 8'
  }
];

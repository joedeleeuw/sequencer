import instruments from './instruments';
import { map } from 'lodash';

// [
//   { steps: [{ isActive }], sound },
//   ,
//   { steps: [{ isActive }], sound },
//   { steps: [{ isActive }], sound }
// ];
// NOTE: I wanted to generate a nice litle sequence per instrument but decided to forgo for sake of time
const functionThatReturnsABool = () => true;
const genSequenceForInstrument = (instrument, instrumIndex, numSteps = 16, isRandSound = false) => {
  return map(new Array(16), (step, i) => functionThatReturnsABool);
};

export default function() {
  return map(instruments, genSequenceForInstrument);
}

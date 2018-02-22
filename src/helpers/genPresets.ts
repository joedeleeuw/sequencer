import { map } from 'lodash';

/* 
*  NOTE: I uh... can you tell? I'm a musician! (NOT a musician, but i bought a music theory book!)
*  This is where i would like to spend MUCH more time. These should be extended to
*  support and validate instrument specific presets... Also thought it would be cool to be able to 
*  double click (onMouseDown) on a 'hit' and be provided the option to apply state change to ever n hit
*  -- but time..
*/
export const first = steps => map(new Array(steps), (n, i) => i % 2 === 0);
export const second = steps => map(new Array(steps), (n, i) => (i === 4 || i === 3 ? true : false));
export const third = steps => map(new Array(steps), (n, i) => (i === 6 || i === 8 ? true : false));

export default numSteps => [first(numSteps), second(numSteps), third(numSteps)];

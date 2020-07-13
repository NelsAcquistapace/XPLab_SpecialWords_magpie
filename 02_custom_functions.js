// Here custom functions are defined, which can be used globally

/* Hooks
*
*
*/

// This function is hooked by all trials after the fixation point is showing
// it creates the pause of 1 second between the ofset of the audiotrack and when the picture is showing
// time calculation, slide appears:
// 500ms pause
// 250ms fix cross
// 600ms sound
// 1000ms pause
// = 2350ms
// as this is hoocked after fix_point its -750ms
// = 1600ms
const after_fix_pause = function(data, next) {
setTimeout(() => {  next() }, 1600);
}

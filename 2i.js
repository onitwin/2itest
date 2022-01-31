/*"In a language of your choice, 
using all best practice principles you’re aware of, 
could you please provide code that iterates in multiples of A until X, 
then in multiples of A + 1 until 2X, then multiples of A + 2 until 3X. 
Please state any assumptions you’ve made.";*/

/* pseudocode:
have number increase by its own value untill value X is reached
then have number increase by initial value +1 untill two times X is reached
then have number increase by initial value +2 untill three times X is reached
*/

/*ASSUMPTIONS:
Reusability
Return Value as Validation
Evidence of increment change
Assume all values ate positive integers
Since there is no guaruntee that a given target (X) is a multiple of A or A+1 or A+2
(e.g if A is 12 and X is 100, the 9th increment exceeds target value) so
I am assuming the target of X is a greater than or equal to measure before updating increments
As evidence that increment change is taking place, I will console log out at each step increase with 
the current value.
I am also assuming a return value to be given once target of 3X is reached. 
I am assuming the iterations are concurrent, that is, the start point of the second loop is the result of
the first loop, and the start point of the third loop is the end point of the second loop.
*/

function singleIteration(a, x, start = 0) {
  let target = start;
  while (target < x) {
    target += a;
    console.log(`Target currently at ${target}`);
  }
  console.log("ITERATION TARGET:", target);
  return target;
}

function iteratorFunction(a, x) {
  const firstPass = singleIteration(a, x);
  const secondPass = singleIteration(a + 1, x * 2, firstPass);
  const thirdPass = singleIteration(a + 2, x * 3, secondPass);
  console.log("FINAL RESULT", thirdPass);
  return thirdPass;
}

module.exports = {
  iteratorFunction,
  singleIteration,
};

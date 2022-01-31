/*"In a language of your choice, 
using all best practice principles you’re aware of, 
could you please provide code that iterates in multiples of A until X, 
then in multiples of A + 1 until 2X, then multiples of A + 2 until 3X. 
Please state any assumptions you’ve made.";*/

/* pseudocode:
have number increase by its own value untill value X is reached
then have number increase by initial value +1 untill two times X is reached
then have number increase by initial value +2 untill three times X is reache
*/

/*ASSUMPTIONS:
Reusability
Return Value as Validation
Evidence of increment change
Since there is no guaruntee that a given target (X) is a multiple of A or A+1 or A+2
(e.g if A is 12 and X is 100, the 9th increment exceeds target value) so
I am assuming the target of X is a greater than or equal to measure before updating increments
As evidence that increment change is taking place, I will console log out at each step increase with 
the current value.
I am also assuming a return value to be given once target of 3X is reached. 
*/

function singleIteration(a, x) {
  const start = a;
  let result = 0;
  for (let i = 0; i < x; i += start) {
    console.log(`Current increment is ${i}`);
    result = i;
  }
  return result;
}

function iteratorFunction(a, x) {
  return result;
}

module.exports = {
  iteratorFunction,
  singleIteration,
};

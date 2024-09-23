//explaining the concept of falsy values in JavaScript
/* In JavaScript things can be either 'true' or 'false'.
Certain values are treated as 'false' when used in conditions like if statements
or while loops, even though they might not be Boolean value false. These are called falsy values.
Javascript automatically converts any value to a Boolean (true or false)when needed, and these falsy
values as seen in these situations. here are the six falsy values in JavaScript, false, 0, empty string,
null, underfined, and NaN. 
*/
//variables for the concept of falsy value
let a = "The concept of falsy values in JavaScript";
let b = "In JavaScript things can be either 'true' or 'false'. Certain values are treated as 'false' when used in conditions like if statements or while loops, even though they might not be Boolean value false.";
let c = "These are called falsy values. Javascript automatically converts any value to a Boolean (true or false)when needed, and these falsy values as seen in these situations."
let d = "JavaScript defines a specific set of values as falsy, including 0,(empty string), null, undefined, NaN, and of course false. ";
//the output for the said variables
console.log(a);
console.log();
console.log(b);
console.log(c);
console.log(d);

//examples of falsy value in code
if (0) {
    console.log("this will not be logged because 0 is falsy." ); //zero is considered falsy because it represents the absence of the value
}
//another example
if (undefined) {
    console.log("this will not logged because undefined is falsy"); //indicates that a variables has been declared but has not yet been assigned a value
}
//last example for falsy
if (NaN) {
    console.log("this will not logged because NaN is falsy"); //it's falsy because it's not a valid numerical value
}

/*
Reference
https://developer.mozilla.org/en-US/docs/Glossary/Falsy
https://www.linkedin.com/pulse/understanding-conditional-statements-comparison-laurence-svekis--5akfc
https://www.shecodes.io/athena/9935-what-is-nan-and-why-is-it-used-in-javascript
*/
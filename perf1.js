//explaining the difference between the let, const, and var
//explaining the difference between the let, const, and var
// let variables and the things let could do to the user's code
let ab = "Let";
let cd = "The variables declared with let inside the curly braces are only visible within those braces.";
let ef = "Allows users to reassign values multiple time.";
let hi = "Variable declared with let can not be redeclared.";
let jk = "When user update the value depends on the input."
//displaying the output of the said variables
console.log("       --The three commands in JavaScript in creating variables--")
console.log("**", ab);
console.log("Block Scope:", cd);
console.log("Can do:", ef);
console.log("Cannot do:", hi);
console.log("Best Practice:", jk);
console.log()

//var variables and the things var could do to the user's code
let lm = "Var";
let no = "The variables declared with 'var' inside the curly braces can be accessed from the braces.";
let pq = "Variables declared with 'var' can be redeclared.";
let rs = "Redeclaring variables when using var inside a block would unintentionally overwrite the same variable outside the block.";
let tu = "Declare and initialize a local variable using 'var' in a single line";
//displaying the output of the said variables
console.log("**",lm);
console.log("Block Scope:", no);
console.log("Can do:", pq);
console.log("Cannot do:", rs);
console.log("Best Practice:", tu);
console.log();

// 'const' variables and the change it can do to codes
let vw = "Const";
let cc = "The variables that are declared with 'const' cannot also be redeclared just like 'let'.";
let xy = "Can change the elements of constant array.";
let zz = "Reassigning the variables when using const will not make your code run and it will display an  error message.";
let aaa = "Creating a variable that cannot be change after it is set.";
//display the output of the said variables
console.log("**",vw);
console.log("Block Scope:", cc);
console.log("Can do:", xy);
console.log("Cannot do:", zz);
console.log("Best Practice:", aaa);

/*
References:
https://learn.microsoft.com/en-us/dotnet/csharp/programming-guide/classes-and-structs/implicitly-typed-local-variables
https://www.geeksforgeeks.org/difference-between-var-and-let-in-javascript/
https://www.shecodes.io/athena/124459-why-are-we-using-let-and-not-const#questions
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const
*/
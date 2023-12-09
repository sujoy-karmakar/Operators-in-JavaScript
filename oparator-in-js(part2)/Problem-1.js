/*
Explain the usage of ternary operator with syntax and write a program to check whether the number is even
or odd using the ternary operator.
*/
/*
Ans:- Ternary Operator is a short hand way to write simple and conditional statement. It is a short way to right if-or-else for simple conditional statement.
*/

// syntax

// condition ?  expressionTrue : expressionFalse

// condition: A boolean expration that is evalauted.
// expressionTrue: This is the expression that will be executed if the condition is true.
// expressionFalse: Thisis the expression that will be executed if the condition is false.

//  program to check whether the number is even or odd using the ternary operator.

let number = 19

let check = number % 2 == 0 ? "Even" : "Odd";
console.log(check);

// here we see after module if number is equal to 0, then it is true so it executed "Even" but it dosn't match then it is false so it will be executed "Odd"

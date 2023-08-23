let num1: number = 23; // this is nomral
let num2 = 233; // this is automatic type inference

/*Typescript is smart enough to know the type
of variable on the time of declaration, we don't
really need to redundantly use type everywhere */

console.log(num1, num2);

let random;

random = 32;
random = 'string';

/*So here the variable random get a type any becuase we just defined it
 so typescript implicitly gave it a type any which should be avoid in most cases 
 if we can, we should use noImplicitAny in config file to stop this*/

export {}; // to escape from block-scoped variable declaration error

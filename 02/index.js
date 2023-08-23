"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var num1 = 23; // this is nomral
var num2 = 233; // this is automatic type inference
/*Typescript is smart enough to know the type
of variable on the time of declaration, we don't
really need to redundantly use type everywhere */
console.log(num1, num2);
var random;
random = 32;
random = 'string';

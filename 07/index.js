"use strict";
//tuples in typescript
Object.defineProperty(exports, "__esModule", { value: true });
var user;
user = ['js', 1, true];
user = [1, 'efefe', true];
user = [true, 'e', 1];
/**See in case of union data order didn't matter */
var userTuple;
userTuple = ['jsjsj', 1, true];
userTuple = [true, 1, 'truefalse']; //see this order doesn't work
userTuple = ['jsjsj', 1, true, 21]; //adding something is not allowed
userTuple.push('jndkjd'); //see this is possible

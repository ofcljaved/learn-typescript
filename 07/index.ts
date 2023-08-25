//tuples in typescript

let user: (string | number | boolean)[];
user = ['js', 1, true];
user = [1, 'efefe', true];
user = [true, 'e', 1];
/**See in case of union data order didn't matter */

let userTuple: [string, number, boolean];
userTuple = ['jsjsj', 1, true];
userTuple = [true, 1, 'truefalse']; //see this order doesn't work

userTuple = ['jsjsj', 1, true, 21]; //adding something is not allowed

userTuple.push('jndkjd'); //see this is possible

/** Tuple is used to define the order of the things appear in the array */
export {};

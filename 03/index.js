"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function addtwo(num) {
    return num + 2;
}
//These here will make sure that the returned value must be a number too
function addtwoNew(num) {
    return num + 2;
}
function toUpper(str) {
    return str.toUpperCase();
}
// we can pass default value like this
function login(email, admin) {
    if (admin === void 0) { admin = false; }
    return 'whatever you want';
}
addtwo(3);
toUpper('ajaja');
/**In case of function we have to have type inference because typescript won't
 * allow us to follow such things
 */
var arr = [1, 23, 4, 5];
//Good practtice to define type of returning value because paramter value
// is handled by typescript itself;
arr.map(function (elem) {
    return "hehe times ".concat(elem);
});
/**Void tells this method return nothing it's easy for debugging or when you don't want a return value
 * and just wanted to call some other function or something
 */
var consoleErr = function (err) {
    console.log(err);
};
/**Never type tells that this type of function should never return a value in Void case it's not telling
 * the you what it's do but in never case it tells you not to return anything or it signifies termination
 * of the program or procedure
 */
var handleErr = function (err) {
    throw err;
};

"use strict";
//generic in Typescript
// normal way of function definition
function one(val) {
    return val;
}
// what if it can accept string number both
function two(val) {
    return val;
}
/**In this case if it accepts boolean then we get a long chain
 * One way to avoid it is use any
 */
function three(val) {
    return val;
}
//but here number  can return string and we should avoid any in most of the cases
function four(val) {
    return val;
}
// Now here it works like any like it accept any data type but only return that type
// If you pass number then it will return a number
four(2); //see on hover
four({ brand: 'js', type: 21 });
/**Now suppose I'm expecting an array of same type
 * it could be number string or objects
 * and function will return an object out it
 */
const searchItem = (items) => {
    // doing some data search
    const arr = 2; //some random item index find
    return items[arr];
};

//generic in Typescript

// normal way of function definition

function one(val: number): number {
  return val;
}

// what if it can accept string number both

function two(val: number | string): number | string {
  return val;
}
/**In this case if it accepts boolean then we get a long chain
 * One way to avoid it is use any
 */

function three(val: any): any {
  return val;
}
//but here number  can return string and we should avoid any in most of the cases

function four<Type>(val: Type): Type {
  return val;
}

// Now here it works like any like it accept any data type but only return that type
// If you pass number then it will return a number

four(2); //see on hover

/**GENERICS use when We need to specify the type of argument and return is same
 * And we can use it very well with custom types
 */

interface Bottle {
  brand: string;
  type: number;
}

four<Bottle>({ brand: 'js', type: 21 });

/**Now suppose I'm expecting an array of same type
 * it could be number string or objects
 * and function will return an object out it
 */

const searchItem = <T>(items: T[]): T => {
  // doing some data search
  const arr = 2; //some random item index find
  return items[arr];
};

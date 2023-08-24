//Union
/**When you're not sure what type of data is coming
 * then use union to combine like number or string
 * don't use any type
 * try your hardest to avoid using any at any cost
 */

let value: number | string = 'Nil';

value = 23;
value = 'Nil';

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let javed: User | Admin = {
  name: 'javed',
  id: 234,
};

javed = { username: 'ofcljaved', id: 234 };

function getDbId(id: number | string) {
  if (typeof id === 'string') {
    id.toLowerCase();
  }
  console.log(id);
}

//for arrays
const data1: number[] = [1, 2, 3, 4]; // all numbers nothing else
const data2: string[] = ['1', '2', '3']; // all string nothing else
const data3: string[] | number[] = ['1', '2', '3']; // either can be all string or all numbers not mix nothing else
const data4: (string | number)[] = [1, 1, 2, 3, '2', '3']; // can be a mix of both now

let seatAlottment: 'aisle' | 'middle' | 'window';

seatAlottment = 'aisle';
seatAlottment = 'crew'; // see not allowed here
/**This allow the value of between those, it's very useful and make your application secure */

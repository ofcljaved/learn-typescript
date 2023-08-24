//Union
/**When you're not sure what type of data is coming
 * then use union to combine like number or string
 * don't use any type
 * try your hardest to avoid using any at any cost
 */
var value = 'Nil';
value = 23;
value = 'Nil';
var javed = {
    name: 'javed',
    id: 234,
};
javed = { username: 'ofcljaved', id: 234 };
function getDbId(id) {
    if (typeof id === 'string') {
        id.toLowerCase();
    }
    console.log(id);
}
//for arrays
var data1 = [1, 2, 3, 4]; // all numbers nothing else
var data2 = ['1', '2', '3']; // all string nothing else
var data3 = ['1', '2', '3']; // either can be all string or all numbers not mix nothing else
var data4 = [1, 1, 2, 3, '2', '3']; // can be a mix of both now
var seatAlottment;
seatAlottment = 'aisle';
seatAlottment = 'crew'; // see not allowed here
/**This allow the value of between those, it's very useful and make your application secure */

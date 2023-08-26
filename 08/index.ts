//enums in ts
enum SeatChoice {
  AISLE,
  MIDDLE,
  WINDOW,
}
/**by default enums get value from 0 to in order they appear like
 * AISLE is 0
  MIDDLE is 1
  WINDOW is 2
 */
enum SeatChoiceNew {
  AISLE = 10,
  MIDDLE = 22,
  WINDOW = 34,
}
/**Now you changed the value */
const seat = SeatChoice.AISLE;
const jseat = SeatChoiceNew.AISLE;

/** using enums directly will generate huge amount of code so to solve this just use const */
const enum SeatChoiceNew2 {
  AISLE = 10,
  MIDDLE = "middle",
  WINDOW = 34,
}

const aseat = SeatChoiceNew2.MIDDLE;
//see js code for varibale aseat

export {};

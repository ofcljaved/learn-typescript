"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//enums in ts
var SeatChoice;
(function (SeatChoice) {
    SeatChoice[SeatChoice["AISLE"] = 0] = "AISLE";
    SeatChoice[SeatChoice["MIDDLE"] = 1] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 2] = "WINDOW";
})(SeatChoice || (SeatChoice = {}));
/**by default enums get value from 0 to in order they appear like
 * AISLE is 0
  MIDDLE is 1
  WINDOW is 2
 */
var SeatChoiceNew;
(function (SeatChoiceNew) {
    SeatChoiceNew[SeatChoiceNew["AISLE"] = 10] = "AISLE";
    SeatChoiceNew[SeatChoiceNew["MIDDLE"] = 22] = "MIDDLE";
    SeatChoiceNew[SeatChoiceNew["WINDOW"] = 34] = "WINDOW";
})(SeatChoiceNew || (SeatChoiceNew = {}));
/**Now you changed the value */
var seat = SeatChoice.AISLE;
var jseat = SeatChoiceNew.AISLE;
var aseat = "middle" /* SeatChoiceNew2.MIDDLE */;

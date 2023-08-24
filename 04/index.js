"use strict";
//how to define the type of object returning function
Object.defineProperty(exports, "__esModule", { value: true });
function func() {
    return {};
}
var func1 = function () { return ({}); };
//example
function returnObj(_a) {
    var string = _a.name;
    return { name: "react", paid: true };
}
returnObj({ name: "hehe00", paid: true }); // see error here
var obj = { name: "hehe00", paid: true };
returnObj(obj); // no error here

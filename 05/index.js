"use strict";
//type aliases
Object.defineProperty(exports, "__esModule", { value: true });
var createUser = function (user) {
    return { name: "", email: "", isActive: true };
};
var user = { name: "", email: "", isActive: true };
createUser(user);
var user1 = { _id: "1233", name: "JAVED" };
user1._id = "rjrjr"; // can't write to readonly property
var userArr = { name: "javed", subject: ["react"] };
userArr.subject.push("name");
userArr.subject[0] = "js";

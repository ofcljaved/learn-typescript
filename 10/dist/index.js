"use strict";
/** Classes in ts */
/** In Typescript we have to tell the class what value should be coming
 * and what it's type like here
 * we tell the class user that email and name will be there
 */
class User {
    constructor(email, name) {
        this.city = null;
        this.salary = 20000;
        this.email = email;
        this.name = name;
    }
}
//another way of defining class in produdction level use case
class UserProd {
    constructor(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
        this.city = null; //readonly have to define outside in both cases
    }
}
const ofcljaved = new User('ofcljaved@.com', 'ofcljaved ');
ofcljaved.city = 'L.A.';
//Getter and setters
class UserClass {
    constructor(email, name, id) {
        this.email = email;
        this.name = name;
        this.id = id;
        this._coursecount = 1;
        this.city = null;
    }
    get getEmail() {
        return `${this.name}@ofcljaved.com`;
    }
    get coursecount() {
        return this._coursecount;
    }
    set coursecount(coursenum) {
        //typescript strictly says we shouldn't put anything in the return type here not even void type
        this._coursecount = coursenum;
    }
}
class SubUserClass extends UserClass {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._coursecount = 2; //only protected property can be pass on to children through inheritence not the private ones
    }
}

/** Classes in ts */
/** In Typescript we have to tell the class what value should be coming
 * and what it's type like here
 * we tell the class user that email and name will be there
 */
class User {
  email: string;
  name: string;
  city: string | null = null;
  private salary: number = 20000;
  constructor(email: string, name: string) {
    this.email = email;
    this.name = name;
  }
}

//another way of defining class in produdction level use case
class UserProd {
  readonly city: string | null = null; //readonly have to define outside in both cases
  constructor(public email: string, public name: string, private id: number) {}
}

const ofcljaved = new User('ofcljaved@.com', 'ofcljaved ');
ofcljaved.city = 'L.A.';

//Getter and setters

class UserClass {
  protected _coursecount = 1;
  readonly city: string | null = null;
  constructor(public email: string, public name: string, private id: number) {}

  get getEmail(): string {
    return `${this.name}@ofcljaved.com`;
  }

  get coursecount(): number {
    return this._coursecount;
  }

  set coursecount(coursenum: number) {
    //typescript strictly says we shouldn't put anything in the return type here not even void type
    this._coursecount = coursenum;
  }
}

class SubUserClass extends UserClass {
  isFamily: boolean = true;
  changeCourseCount() {
    this._coursecount = 2; //only protected property can be pass on to children through inheritence not the private ones
  }
}

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

const ofcljaved = new User("ofcljaved@.com", "ofcljaved ");
ofcljaved.city = "L.A.";

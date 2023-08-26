//type interfeces
interface User {
  name: string;
  email: string;
  id: number;
  start(): string;
  getData(name: string): number;
}

/** to extend or reopen an interface */

interface User {
  googleId: string;
}

interface Admin extends User {
  role: "admin" | "user" | "learner";
}
const javed: User = {
  name: "javed",
  email: "javed@ofcljaved.com",
  id: 222,
  start() {
    return this.name;
  },
  getData() {
    //in interface the passing argument not forcing us to  pass
    return this.id;
  },
  googleId: "-09876",
};
const javed1: User = {
  name: "javed",
  email: "javed@ofcljaved.com",
  id: 222,
  start() {
    return this.name;
  },
  getData(name: "javed") {
    //we can still pass it
    return this.id;
  },
  googleId: "098765",
};
const javed2: User = {
  name: "javed",
  email: "javed@ofcljaved.com",
  id: 222,
  start() {
    return this.name;
  },
  getData(fname: "javed") {
    //we can use another variable name to get it, ts won't show error
    return this.id;
  },
  googleId: "876545678",
};
const javedAdmin: Admin = {
  name: "javed",
  email: "javed@ofcljaved.com",
  id: 222,
  start() {
    return this.name;
  },
  getData(fname: "javed") {
    //we can use another variable name to get it, ts won't show error
    return this.id;
  },
  googleId: "876545678",
  role: "admin",
};

//type aliases

type User = {
  email: string;
  name: string;
  isActive: boolean;
};

const createUser = (user: User): User => {
  return { name: "", email: "", isActive: true };
};

let user: User = { name: "", email: "", isActive: true };

createUser(user);

/**
 * this type alais make code more readable and managable
 */

//readonly variable

type User1 = {
  readonly _id: string;
  name: string;
};

let user1: User1 = { _id: "1233", name: "JAVED" };
user1._id = "rjrjr"; // can't write to readonly property

type UserArr = {
  readonly subject: [string];
  name: string;
  credit?: number; //? allows us to give optional value
};

let userArr: UserArr = { name: "javed", subject: ["react"] };
userArr.subject.push("name");
userArr.subject[0] = "js";

/**readonly property doesn't prevent us from changing an object or array values */

type ComplexUser = User & UserArr;
// this is how we can generate new type from the existing ones

export {};

//how to define the type of object returning function

function func(): {} {
  return {};
}

const func1 = (): {} => ({});

//example
function returnObj({ name: string }): { name: string; paid: boolean } {
  return { name: "react", paid: true };
}

returnObj({ name: "hehe00", paid: true }); // see error here

let obj = { name: "hehe00", paid: true };
returnObj(obj); // no error here

export {};

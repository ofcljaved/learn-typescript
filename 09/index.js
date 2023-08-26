var javed = {
    name: "javed",
    email: "javed@ofcljaved.com",
    id: 222,
    start: function () {
        return this.name;
    },
    getData: function () {
        //in interface the passing argument not forcing us to  pass
        return this.id;
    },
    googleId: "-09876",
};
var javed1 = {
    name: "javed",
    email: "javed@ofcljaved.com",
    id: 222,
    start: function () {
        return this.name;
    },
    getData: function (name) {
        //we can still pass it
        return this.id;
    },
    googleId: "098765",
};
var javed2 = {
    name: "javed",
    email: "javed@ofcljaved.com",
    id: 222,
    start: function () {
        return this.name;
    },
    getData: function (fname) {
        //we can use another variable name to get it, ts won't show error
        return this.id;
    },
    googleId: "876545678",
};
var javedAdmin = {
    name: "javed",
    email: "javed@ofcljaved.com",
    id: 222,
    start: function () {
        return this.name;
    },
    getData: function (fname) {
        //we can use another variable name to get it, ts won't show error
        return this.id;
    },
    googleId: "876545678",
    role: "admin",
};

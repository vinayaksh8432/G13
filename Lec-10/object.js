"use strict";
let user = {
    username: "Nitesh",
    age: 23,
};
console.log(user.username);
user.age = 45;
let num = ["h1", "h2"];
num[3] = "45";
let numstr = [];
numstr[0] = 1;
numstr[1] = "10";
console.log(numstr);
let emp = {
    id: 1,
    ename: "Nitesh",
    salay: 20000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
};
console.log(emp.getName());
function empName(em) {
    return em.getName();
}
console.log(empName(emp));

interface User {
    username: string;
    age: number;
}

let user: User = {
    username: "Nitesh",
    age: 23,
};

console.log(user.username);
user.age = 45;

let num: string[] = ["h1", "h2"];
num[3] = "45";
let numstr: number[] | string[] = [];
numstr[0] = 1;
numstr[1] = "10";
console.log(numstr);

interface Emp {
    id: number;
    ename: string;
    salay: number;
    dep: string;
    getName: () => {};
}

interface Emp2 {
    id: number;
    ename: string;
    salay: number;
    dep: string;
    getSal(): number;
}

let emp: Emp = {
    id: 1,
    ename: "Nitesh",
    salay: 20000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
};

let emp3: Emp = {
    id: 1,
    ename: "ritik",
    salay: 20000,
    dep: "IT",
    getName: function () {
        return this.ename;
    },
};

let emp2: Emp2 = {
    id: 1,
    ename: "Nitesh",
    salay: 20000,
    dep: "IT",
    getSal: function () {
        return this.salay;
    },
};

console.log(emp.getName());
function empName(em: Emp) {
    return em.getName();
}
console.log(empName(emp));

let employee: Emp[] = [emp, emp3];

interface User2 {
    id: number;
    email: string;
    password: string;
}

let users: User2[] = [
    { id: 1, email: "ddsds", password: "dsdsd" },
    { id: 1, email: "ddsds", password: "dsdsd" },
    { id: 1, email: "ddsds", password: "dsdsd" },
];

let some: number | string;
let arr2: number[] | string[] = ["1", "3"];
let arr3: (number | string)[] = ["1", 3];

import React, { useEffect, useState } from "react";

// const App = () => {
//     // let [users, setUsers] = useState([
//     //     { name: "Nitesh", age: "23" },
//     //     { name: "Vinayak", age: "20" },
//     //     { name: "abc", age: "18" },
//     // ]);

//     let [users, setUsers] = useState([]);

//     useEffect(() => {
//         async function fetchUser(URL) {
//             let response = await fetch(URL);
//             let userData = await response.json();
//             setUsers(userData);
//         }
//         fetchUser("https://jsonplaceholder.typicode.com/users");
//     }, []);

//     return (
//         <>
//             <div>
//                 {/* <User name={users[0].name} age={users[0].age}></User>
//                 <User name={users[1].name} age={users[1].age}></User>
//                 <User name={users[2].name} age={users[2].age}></User> */}
//                 {users.map((user) => {
//                     return (
//                         <User
//                             key={user.id}
//                             name={user.name}
//                             email={user.email}
//                         ></User>
//                     );
//                 })}
//             </div>
//         </>
//     );
// };

// function User(props) {
//     return (
//         <>
//             <div>
//                 <h1>User: {props.name}</h1>
//                 <h1>Email: {props.email}</h1>
//             </div>
//         </>
//     );
// }

function Child() {
    let a = 4;
    let b = 5;
}

const App = () => {
    return (
        <>
            <div>App</div>22
        </>
    );
};

export default App;

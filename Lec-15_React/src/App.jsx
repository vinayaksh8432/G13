import { useState } from "react";

// const App = () => {
//     let [cValue, setCValue] = useState(null);

//     function getDatafromChild(cdata) {
//         console.log(cdata);
//         setCValue(cdata);
//     }

//     return (
//         <div>
//             <h1>App Component</h1>
//             {cValue && <h4>{cValue}</h4>}
//             <ChildComponent fn={getDatafromChild} />
//         </div>
//     );
// };

// function ChildComponent(props) {
//     let fn = props.fn;
//     let data = 10;

//     return (
//         <>
//             <div>
//                 <h1>Child Component</h1>
//                 <button onClick={() => fn(data)}>Give Data</button>
//             </div>
//         </>
//     );
// }

const App = () => {
    let [todos, setTodos] = useState([
        { id: "1", title: "asdfg", desc: "hjjhjhjhj" },
    ]);
    return (
        <div>
            <h1>Todo Application</h1>
            <TodoInput />
            <TodoList todos={todos} />
        </div>
    );
};

function TodoInput(props) {
    return (
        <form action="">
            <input type="text" placeholder="Enter todo title" />
            <input type="text" placeholder="Enter todo description" />
            <button>Add</button>
        </form>
    );
}

function TodoList(props) {
    let todos = props.todos;
    return (
        <div>
            <ul>
                {todos.map((todo) => {
                    return (
                        <ToDoComponent
                            key={todo.id}
                            title={todo.title}
                            desc={todo.desc}
                        />
                    );
                })}
            </ul>
        </div>
    );
}

function ToDoComponent(props) {
    return (
        <li>
            <h3>{props.title}</h3>
            <p>{props.desc}</p>
        </li>
    );
}

export default App;

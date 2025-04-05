import { useEffect, useState } from "react";
import "./App.css";

// function App() {
//     const [count, setCount] = useState(0);
//     const [condition, setCondition] = useState(0);
//     function changeCount() {
//         setCount(count + 1);
//         if (count % 10 == 0) {
//             console.log("hi");
//             setCondition(condition);
//         }
//     }

//     useEffect(() => {
//         console.log("Hello world");

//     }, [condition]);

//     return (
//         <>
//             <div>
//                 <h1>Use Effect</h1>
//                 <button onClick={changeCount}>Change state</button>
//             </div>
//         </>
//     );
// }

function App() {
    const [time, setTime] = useState(0);
    useEffect(() => {
        let id = setInterval(() => {
            setTime((time) => time + 1);
        }, 1000);
        return () => {
            clearInterval(id);
        };
    }, []);

    return (
        <>
            <h1>{time}</h1>
        </>
    );
}

export default App;

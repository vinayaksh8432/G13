import { useState } from "react";

import "./App.css";

function App() {
    let [value, setValue] = useState("Click to generate random number");

    function random() {
        let randomNumber = Math.floor(Math.random() * 10);
        setValue(randomNumber);
    }

    // Random Color Generator
    let [color, setColor] = useState("black");
    function changeColor() {
        let color = [
            "red",
            "blue",
            "purple",
            "pink",
            "orange",
            "yellow",
            "black",
        ];
        let index = Math.floor(Math.random() * color.length);
        let randomColor = color[index];
        setColor(randomColor);
    }

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <div
                    style={{
                        height: "200px",
                        width: "200px",
                        border: "1px solid black",
                        marginBottom: "20px",
                        background: color,
                    }}
                />
                <button onClick={changeColor}>Change color</button>
                <h1>{value}</h1>
                <button onClick={random}>Click</button>
                {value == 7 ? (
                    <img
                        style={{
                            height: "150px",
                            width: "150px",
                            paddingTop: "20px",
                        }}
                        src="https://png.pngtree.com/png-clipart/20210310/original/pngtree-3d-gold-trophy-for-winner-png-image_5931061.jpg"
                        alt=""
                    />
                ) : (
                    <img
                        style={{
                            height: "150px",
                            width: "150px",
                            paddingTop: "20px",
                        }}
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvW-czSXP9ARRxmqbjQLqKvS5Z1gJr1TcMbA&s"
                        alt=""
                    />
                )}
            </div>
        </>
    );
}

export default App;

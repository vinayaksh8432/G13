import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
    let navigate = useNavigate();
    function btnClickHandler() {
        navigate("/contact");
    }
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
            </ul>
            <button onClick={btnClickHandler}>Contact</button>
        </div>
    );
};

export default Header;

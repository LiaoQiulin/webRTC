import React from "react";
import {
    Link,
    useNavigate,
    useLocation,

} from "react-router-dom";


export default function (props) {


    return <>
        <h1>PublicPage</h1>
        <ToLogin/>
        <Link to="/protected">ProtectPage</Link>
    </>
}


function ToLogin() {
    let navigate = useNavigate();
    let location = useLocation();
    return <button onClick={() => {
        navigate("/login")
    }}>login</button>
}

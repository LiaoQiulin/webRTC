import React from "react";
import {useNavigate} from "react-router-dom";
import history from "history/browser";

export default function (props) {

    let navigate = useNavigate();
    return <>
        <h1>NoMatchPage</h1>
        <button onClick={() => {
            history.back()
        }}>goBack
        </button>
        <button onClick={() => {
            navigate("/", {replace: true})
        }}>goHome
        </button>
    </>
}



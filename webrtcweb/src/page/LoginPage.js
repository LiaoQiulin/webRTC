import React from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../component/Auth"

export default function (props) {
    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let auth = useAuth();
    console.log("from", from)

    function login() {
        auth.signin("username", () => {
            // Send them back to the page they tried to visit when they were
            // redirected to the login page. Use { replace: true } so we don't create
            // another entry in the history stack for the login page.  This means that
            // when they get to the protected page and click the back button, they
            // won't end up back on the login page, which is also really nice for the
            // user experience.
            navigate(from, {replace: true});
        });
    }

    return <>
        <h1>LoginPage</h1>
        <button onClick={() => login()}>login</button>
    </>
}





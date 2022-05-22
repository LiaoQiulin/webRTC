import React from "react";
import {
    useLocation,
    Navigate,
} from "react-router-dom";

const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback) {
        fakeAuthProvider.isAuthenticated = true;
        setTimeout(callback, 100); // fake async
    },
    signout(callback) {
        fakeAuthProvider.isAuthenticated = false;
        setTimeout(callback, 100);
    },
};


export let AuthContext = React.createContext(null);

export function AuthProvider(props) {
    let [user, setUser] = React.useState(null);

    let signin = (newUser, callback) => {
        return fakeAuthProvider.signin(() => {
            setUser(newUser);
            callback();
        });
    };

    let signout = (callback) => {
        return fakeAuthProvider.signout(() => {
            setUser(null);
            callback();
        });
    };

    let value = {user, signin, signout};

    return <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>;
}

export default function RequireAuth(props) {
    let auth = useAuth();
    let location = useLocation();

    if (!auth.user) {
        return <Navigate to="/login" state={{from: location}} replace/>;
    }

    return props.children;
}

export function useAuth() {
    return React.useContext(AuthContext);
}

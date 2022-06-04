import * as React from "react";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import RequireAuth, { AuthProvider } from './component/Auth'
import ProtectedPage from './page/ProtectedPage'
import PublicPage from './page/PublicPage'
import LoginPage from './page/LoginPage'
import NoMatchPage from './page/NoMatchPage'

function RedirectHome() {
    let navigate = useNavigate();

    useEffect(() => {
        navigate("/public", { replace: true })
    }, [])
    return <></>
}

export default function App() {
    return (<AuthProvider>
        <Routes>
            <Route path="/" element={<RedirectHome />} />
            <Route path="/public" element={<PublicPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/protected"
                element={
                    <RequireAuth>
                        <ProtectedPage />
                    </RequireAuth>
                }
            />
            <Route path="*" element={<NoMatchPage />} />
        </Routes>

    </AuthProvider>)
}

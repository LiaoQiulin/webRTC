import * as React from "react";
import {Route, Routes} from "react-router-dom";
import RequireAuth, {AuthProvider} from './component/Auth'
import ProtectedPage from './page/ProtectedPage'
import PublicPage from './page/PublicPage'
import LoginPage from './page/LoginPage'
import NoMatchPage from './page/NoMatchPage'

export default function App() {
    return (<AuthProvider>
        <Routes>
            <Route path="/" element={<PublicPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route
                path="/protected"
                element={
                    <RequireAuth>
                        <ProtectedPage/>
                    </RequireAuth>
                }
            />
            <Route path="*" element={<NoMatchPage/>}/>
        </Routes>

    </AuthProvider>)
}

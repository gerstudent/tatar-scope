import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import MainPage from '../pages/MainPage';
import App from '../App';
import LoginPage from '../pages/LoginPage';
export default function RouterView () {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<App />} />
                <Route index element={<MainPage />} />
                <Route path='login' element={<LoginPage isSignedUp={true} />} />
                <Route path='signup' element={<LoginPage isSignedUp={false} />} />
            </Routes>
        </Router>
    )
}
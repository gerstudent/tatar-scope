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
import Profile from '../pages/Profile';
import Events from '../pages/Events';
import Groups from '../pages/Groups'


export default function RouterView () {
    const isLoggedIn = true
    return (
        <Router>
                {
                !isLoggedIn && <Routes>
                    <Route path='/' element={<App />} />
                    <Route index element={<MainPage />} />
                    <Route path='login' element={<LoginPage isSignedUp={true} />} />
                    <Route path='signup' element={<LoginPage isSignedUp={false} />} />
                    <Route path='events' element={<Events />} />
                </Routes>
                }
                {
                    isLoggedIn && <Routes>
                        <Route path='/' element={<App />} />
                        <Route index element={<MainPage />} />
                        <Route path='profile' element={<Profile />} />
                        <Route path='events' element={<Events />} />
                        <Route path='groups' element={<Groups />} />
                    </Routes>
                }
        </Router>
    )
}
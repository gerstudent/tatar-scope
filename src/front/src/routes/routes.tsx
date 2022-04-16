import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import MainPage from '../pages/MainPage';

export default function RouterView () {
    return (
        <Router>
            <Routes>
                <Route path='/'>
                    <MainPage />
                </Route>
            </Routes>
        </Router>
    )
}
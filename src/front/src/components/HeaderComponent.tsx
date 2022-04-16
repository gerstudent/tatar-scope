import React from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/tatevents.svg'

export default function HeaderComponent () {
    return (
        <header className="container mt-4 flex items-center justify-between">
                <div className="">
                    <button className="">
                        <img src={logo} alt="" />
                    </button>
                </div>
                <div className="flex items-center">
                    <Link to={'/login'}  className="bg-transparent p-4 border-0">
                        Оештыручыларга 
                    </Link>
                    <Link to={'/login'} className="bg-green-500 p-4 border-0">
                        Катнашучыларга
                    </Link>
                    <button className="ml-4 bg-slate-200 p-4 rounded-md">Афишага күчү</button>
                </div>
            </header>
    )
}
import React from "react";
import logo from '../assets/tatevents.svg'

export default function MainPage () {
    return (
        <div className="container mt-4 flex items-center justify-between">
            <div className="">
                <button className="">
                    <img src={logo} alt="" />
                </button>
            </div>
            <div className="flex items-center">
                <button className="bg-transparent p-4 border-0">
                    Оештыручыларга
                </button>
                <button className="ml-4 bg-slate-400 p-4 rounded-md">Афишага күчү</button>
            </div>
        </div>
    )
}
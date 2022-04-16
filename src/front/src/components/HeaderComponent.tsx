import React from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/tatevents.svg'

import {IHeaderComponentProps} from '../interfaces'
export default function HeaderComponent ({isLoggedIn, name, role}: IHeaderComponentProps) {
    return (
        <header className="container mt-4 flex items-center justify-between">
                <div className="">
                    <Link to={'/'} className="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                {!isLoggedIn && <div className="flex items-center">
                    <Link to={'/login'}  className="bg-transparent p-4 border-0">
                        Оештыручыларга 
                    </Link>
                    <Link to={'/login'} className="text-white rounded-md bg-green-500 p-4 border-0">
                        Катнашучыларга
                    </Link>
                    <button className="ml-4 bg-slate-200 p-4 rounded-md">Афишага күчү</button>
                </div>}
                {
                    isLoggedIn && <Link to={'profile'} className="block flex items-center">
                        <div className="">
                            <img src="https://i.pinimg.com/222x/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.jpg" 
                            style={{width: '50px',
                            height: '50px',
                            borderRadius: '50%'}}
                            alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-lg">{name}</p>
                            <p className="mt-2 text-base">{role}</p>
                        </div>
                    </Link>
                }
            </header>
    )
}
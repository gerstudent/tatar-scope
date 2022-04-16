import React from "react";
import {Link} from 'react-router-dom'
import logo from '../assets/tatevents.svg'
import {IHeaderComponentProps} from '../interfaces'
import './HeaderComponent.css'
export default function HeaderComponent ({isLoggedIn, name, role}: IHeaderComponentProps) {
    return (
        <header className="container header">
                <div className="">
                    <Link to={'/'} className="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                {!isLoggedIn && <div className="ml-auto flex-center">
                    <Link to={'/login'}  className="">
                        Оештыручыларга 
                    </Link>
                    <Link to={'/login'} className="ml-4 primary-btn">
                        Катнашучыларга
                    </Link>
                    <button className="secondary-btn ml-4">Афишага күчү</button>
                </div>}
                {
                    isLoggedIn && <Link to={'profile'} className="ml-auto flex-center">
                        <div className="">
                            <img src="https://i.pinimg.com/222x/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.jpg" 
                            style={{width: '50px',
                            height: '50px',
                            borderRadius: '50%'}}
                            alt="" />
                        </div>
                        <div className="ml-4">
                            <p className="text-lg">{name}</p>
                            <p>{role}</p>
                        </div>
                    </Link>
                }
            </header>
    )
}
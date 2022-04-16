import React from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/tatevents_white.svg'

export default function FooterComponent() {
    return (
        <footer 
        style={{marginTop: '100px', backgroundColor: 'rgb(6 78 59)'}}>
            <div className="container" style={{
                padding: '24px 0',
                display: 'flex',
                alignItems: 'center'
            }}>
            <div className="">
                    <Link to={'/'} className="">
                        <img src={logo} alt="" />
                    </Link>
                </div>
            </div>
        </footer>
    )
}
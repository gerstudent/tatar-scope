import React from "react";
import { IEventComponentProps } from "../interfaces";
export default function EventComponent({name, description, location, date, tickets, price, image}: IEventComponentProps) {
    return (
        <div className="" style={{backgroundColor: '#f4f4f4', maxWidth: '300px', borderRadius: '6px'}}>
            <div className="">
                <img src={image} alt="" style={{width: '300px', height: '250px'}} />
            </div>
            <p className="text-lg font-bold"
            style={{padding: '12px 12px 0 12px'}}>{name}</p>
            <div style={{padding: '12px', display: 'flex', flexDirection: 'column'}}>
                <span className="text-base">{date}</span>
                <span className="text-base">{location}</span>
            </div>
            <p style={{padding: '0 12px 12px 12px'}}>{description}</p>
            <div className="flex justify-between items-start"
            style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '0 12px 12px 12px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <button className="primary-btn">Катнашу</button>
                    <p className="text-base" style={{marginTop: '4px'}}>{tickets} билет калды</p>
                </div>
                <p className="text-base font-bold">{price} сум</p>
            </div>
        </div>
    )
}
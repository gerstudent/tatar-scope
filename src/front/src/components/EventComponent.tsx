import React from "react";
import { IEventComponentProps } from "../interfaces";
export default function EventComponent({name, description, location, date, tickets, price, image}: IEventComponentProps) {
    return (
        <div className="">
            <div className="">
                <img src={image} alt="" style={{width: '250px', height: '250px'}} />
            </div>
            <p className="p-4 pb-0 text-lg font-bold">{name}</p>
            <div className="p-4">
                <span className="text-base text-slate-600 mr-4">{date}</span>
                <span className="ml-4 text-base text-slate-600">{location}</span>
            </div>
            <p className="p-4 pt-0">{description}</p>
            <div className="mt-4 flex justify-between items-start">
                <div className="flex flex-col">
                    <button className="rounded-full p-4 bg-green-500">Катнашу</button>
                    <p className="text-base">{tickets} билет калды</p>
                </div>
                <p className="text-lg font-bold text-emerald-900">{price} сум</p>
            </div>
        </div>
    )
}
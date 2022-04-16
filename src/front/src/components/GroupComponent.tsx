import React from 'react'
import { IGroupComponentProps } from '../interfaces'

export default function GroupComponent({name, people, image, tags}: IGroupComponentProps) {
    return (
        <div className="flex items-start">
            <div className="">
                <img src={image} alt=""
                style={{width: '50px',
                height: '50px',
                borderRadius: '50%'}}
                className="mr-4" />
            </div>
            <div className="">
                <h4 className="font-bold text-3xl">{name}</h4>
                <p className="mt-2">{people} кеше</p>
                <ul className="flex flex-wrap">
                    {
                        tags?.map((tag: string, index: number) => {
                            return (
                                <li key={index} className='p-4 rounded-sm bg-slate-200'>
                                    {tag}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}
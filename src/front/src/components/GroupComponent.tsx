import React from 'react'
import { IGroupComponentProps } from '../interfaces'

export default function GroupComponent({name, people, image, tags}: IGroupComponentProps) {
    return (
        <div className="flex-center">
            <div className="">
                <img src={image} alt=""
                style={{width: '50px',
                height: '50px',
                borderRadius: '50%'}}
                className="mr-4" />
            </div>
            <div className="">
                <h4 className="font-bold text-lg">{name}</h4>
                <p className="">{people} кеше</p>
                <ul className='tags' style={{display: 'flex', flexWrap: 'wrap'}}>
                    {
                        tags?.map((tag: string, index: number) => {
                            return (
                                <li key={index} style={{padding: '4px', borderRadius: '3px', backgroundColor: '#f5f5f5'}}>
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
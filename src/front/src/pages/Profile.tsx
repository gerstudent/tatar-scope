import React from "react";
import EventComponent from "../components/EventComponent";
import GroupComponent from "../components/GroupComponent";
import HeaderComponent from "../components/HeaderComponent";
import { IProfileProps } from "../interfaces";
import {Link} from 'react-router-dom'

export default function Profile () {
    const events = [
        {
            name: 'Мин татарча сөйләшәм',
            description: 'Һәр елны үткәрелә торган татар телендә сөйләшү акциясе',
            location: 'Казан шәһәре, Бауман урамы',
            date: '26.04.2022',
            tickets: 100,
            price: 10,
            image: 'https://i0.wp.com/tatar-congress.org/wp-content/uploads/2018/04/AFISHA.jpg?fit=1093%2C773&ssl=1'
        }
    ]
    const groups = [
        {
            name: 'Татарча сөйләшү группасы',
            tags: ['Татар теле', "Сөйләм", "Уку", "Курс"],
            people: 12,
            image: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXB8ZW58MHx8MHx8&w=1000&q=80'
        },
        {
            name: 'Татарча сөйләшү группасы',
            tags: ['Татар теле', "Сөйләм", "Уку", "Курс"],
            people: 12,
            image: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXB8ZW58MHx8MHx8&w=1000&q=80'
        },
        {
            name: 'Татарча сөйләшү группасы',
            tags: ['Татар теле', "Сөйләм", "Уку", "Курс"],
            people: 12,
            image: 'https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z3JvdXB8ZW58MHx8MHx8&w=1000&q=80'
        },
    ]
    const role = 'Катнашучы'
    const name = 'Нәфисә Вәлиева'
    return (
        <div className="">
            <HeaderComponent isLoggedIn={true} name={name} role={role} />
            <div className="container">
                <div style={{display: 'grid',
                gridTemplateColumns: '2fr 1fr',
                gap: '24px'}}>
                    <div className="">
                        <div className="flex-center">
                            <div className="">
                                    <img src="https://i.pinimg.com/222x/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.jpg" 
                                    style={{width: '50px',
                                    height: '50px',
                                    borderRadius: '50%'}}
                                    alt="" />
                            </div>
                            <div className="ml-4">
                                <h2 className="text-3xl font-bold">{name}</h2>
                                <p className="text-lg">{role}</p>
                            </div>
                        </div>
                        <h3 className="font-bold text-2xl">Төркемнәр</h3>
                        <ul className="groups" style={{display: 'flex', flexWrap: 'wrap'}}>
                            
                            {
                                groups.map((group: any, index: number) => {
                                    return (
                                        <li key={index} className="mb-4">
                                            <GroupComponent
                                            name={group.name}
                                            tags={group.tags}
                                            image={group.image}
                                            people={group.people} />
                                        </li>
                                    )
                                })
                            }
                        
                        </ul>
                        <div className="mt-4">
                            <Link to={'/groups'} className="secondary-btn mt-4">Барлык төркемнәрне карау</Link>
                        </div>
                    </div>
                    <ul className="">
                        <h3 className="font-bold text-3xl">Катнашкан чаралар</h3>
                        {
                            events?.map((event: any, index: number) => {
                                return (
                                    <EventComponent key={index}
                                        name={event.name}
                                        location={event.location}
                                        date={event.date} />
                                )
                            })
                        }
                        <div className="mt-4">
                        <Link to={'/events'} className="secondary-btn">Барлык чараларны карау</Link>
                        </div>
                    </ul>
                </div>
            </div>
        </div>
    )
}
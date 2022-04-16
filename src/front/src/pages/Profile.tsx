import React from "react";
import EventComponent from "../components/EventComponent";
import GroupComponent from "../components/GroupComponent";
import { IProfileProps } from "../interfaces";


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
        }
    ]
    const role = 'Катнашучы'
    const name = 'Нәфисә Вәлиева'
    return (
        <div className="container">
            <div className="grid profile-grid gap-6">
                <div className="">
                    <div className="flex items-center">
                        <div className="">
                                <img src="https://i.pinimg.com/222x/34/6e/1d/346e1df0044fd77dfb6f65cc086b2d5e.jpg" 
                                style={{width: '50px',
                                height: '50px',
                                borderRadius: '50%'}}
                                alt="" />
                        </div>
                        <div className="">
                            <h2 className="ml-4 text-5xl font-bold">{name}</h2>
                            <span className="mt-2 text-lg">{role}</span>
                        </div>
                    </div>
                    <h3 className="font-bold text-2xl">Төркемнәр</h3>
                    <ul className="flex flex-wrap">
                        
                        {
                            groups.map((group: any, index: number) => {
                                return (
                                    <GroupComponent key={index}
                                    name={group.name}
                                    tags={group.tags}
                                    image={group.image}
                                    people={group.people} />
                                )
                            })
                        }
                    </ul>
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
                </ul>
            </div>
        </div>
    )
}
import React from "react";
import logo from '../assets/tatevents.svg'
import EventComponent from "../components/EventComponent";
import {Link} from 'react-router-dom'
import HeaderComponent from "../components/HeaderComponent";
interface IMainPageProps {
    events?: {name: string, 
        description: string,
        location: string,
        date: string,
        tickets: number,
        price: number,
        image: string}[]
}
export default function MainPage ({events}: IMainPageProps) {
    return (
        <div className="">
            <HeaderComponent isLoggedIn={true} name={'Nafisa Valieva'} role={'Катнашучы'} />
            <main className="container">
                <section className="mt-24">
                    <h1 className="text-6xl font-bold">
                        Дусларың белән татар чараларында күңел ач!
                    </h1>
                    <p className="mt-10 text-lg">
                        Татарча чараларга, лекцияләргә, күргәзмәләргә һәм башка җирләргә йөр
                    </p>
                    <button className="text-white bg-green-500 p-4 rounded-md">Катнашу</button>
                </section>
                <section className="mt-36">
                    <h3 className="text-4xl">Киләсе чаралар</h3>
                    <ul className="flex flex-wrap">
                        {
                            events?.map((event: any, index: number) => {
                                return (
                                    <EventComponent key={index} name={event.name}
                                    location={event.location}
                                    date={event.date}
                                    price={event.price}
                                    tickets={event.tickets}
                                    description={event.description}
                                    image={event.image} />
                                )
                            })
                        }
                    </ul>
                </section>
            </main>
        </div>
    )
}
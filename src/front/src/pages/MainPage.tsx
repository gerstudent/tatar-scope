import React from "react";
import logo from '../assets/tatevents.svg'
import EventComponent from "../components/EventComponent";

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
            <header className="container mt-4 flex items-center justify-between">
                <div className="">
                    <button className="">
                        <img src={logo} alt="" />
                    </button>
                </div>
                <div className="flex items-center">
                    <button className="bg-transparent p-4 border-0">
                        Оештыручыларга
                    </button>
                    <button className="bg-transparent p-4 border-0">
                        Катнашучыларга
                    </button>
                    <button className="ml-4 bg-slate-400 p-4 rounded-md">Афишага күчү</button>
                </div>
            </header>
            <main className="container">
                <section className="mt-24">
                    <h1 className="text-6xl font-bold">
                        Дусларың белән татар чараларында күңел ач!
                    </h1>
                    <p className="mt-10 text-lg">
                        Татарча чараларга, лекцияләргә, күргәзмәләргә һәм башка җирләргә йөр
                    </p>
                    <button>Катнашу</button>
                </section>
                <section className="mt-36">
                    <h3 className="text-4xl">Киләсе чаралар</h3>
                    <ul className="flex flex-wrap">
                        {
                            events?.map((event: any) => {
                                return (
                                    <EventComponent name={event.name}
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
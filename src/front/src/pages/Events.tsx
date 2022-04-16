import React from "react";
import EventComponent from "../components/EventComponent";
import FooterComponent from "../components/FooterComponent";
import HeaderComponent from "../components/HeaderComponent";
import {IEventsPageProps} from '../interfaces'

export default function Events () {
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
    return (
        <div className="">
            <HeaderComponent />
            <div className="container">
                <h2 className="text-3xl font-bold mt-4 mb-4">Чараларны эзләү</h2>
                <div style={{display: 'flex'}}>
                    <input type="text" placeholder="" 
                    style={{
                        borderRadius: '6px',
                        border: '1px solid #cecece',
                        padding: '6px 12px',
                        backgroundColor: '#fff',
                        width: '60%'
                    }}  />
                    <button className="primary-btn ml-4">Эзләү</button>
                    <button className="secondary-btn ml-4">Фильтрлар куллану</button>
                </div>
                <ul className="main-events"
                style={{display: 'flex', flexWrap: 'wrap', marginTop: '24px', height: '100vh'}}>
                    {
                        // @ts-ignore
                        events.map((event: any, index: number) => {
                            return (
                                <li key={index}>
                                    <EventComponent name={event.name}
                                description={event.description}
                                location={event.location}
                                date={event.date}
                                tickets={event.tickets}
                                price={event.price}
                                image={event.image} />
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <FooterComponent />
        </div>
    )
}
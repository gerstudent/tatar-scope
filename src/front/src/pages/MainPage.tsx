import React from "react";
import logo from '../assets/tatevents.svg'
import EventComponent from "../components/EventComponent";
import {Link} from 'react-router-dom'
import HeaderComponent from "../components/HeaderComponent";
import main from '../assets/main.svg'
import FooterComponent from "../components/FooterComponent";

const events = [
    {
        name: 'Мин татарча сөйләшәм',
        description: 'Һәр елны үткәрелә торган татар телендә сөйләшү акциясе',
        location: 'Казан шәһәре, Бауман урамы',
        date: '26.04.2022',
        tickets: 100,
        price: 10,
        image: 'https://i0.wp.com/tatar-congress.org/wp-content/uploads/2018/04/AFISHA.jpg?fit=1093%2C773&ssl=1'
    },
    {
        name: 'Мин татарча сөйләшәм',
        description: 'Һәр елны үткәрелә торган татар телендә сөйләшү акциясе',
        location: 'Казан шәһәре, Бауман урамы',
        date: '26.04.2022',
        tickets: 100,
        price: 10,
        image: 'https://i0.wp.com/tatar-congress.org/wp-content/uploads/2018/04/AFISHA.jpg?fit=1093%2C773&ssl=1'
    },
    {
        name: 'Мин татарча сөйләшәм',
        description: 'Һәр елны үткәрелә торган татар телендә сөйләшү акциясе',
        location: 'Казан шәһәре, Бауман урамы',
        date: '26.04.2022',
        tickets: 100,
        price: 10,
        image: 'https://i0.wp.com/tatar-congress.org/wp-content/uploads/2018/04/AFISHA.jpg?fit=1093%2C773&ssl=1'
    },
    {
        name: 'Мин татарча сөйләшәм',
        description: 'Һәр елны үткәрелә торган татар телендә сөйләшү акциясе',
        location: 'Казан шәһәре, Бауман урамы',
        date: '26.04.2022',
        tickets: 100,
        price: 10,
        image: 'https://i0.wp.com/tatar-congress.org/wp-content/uploads/2018/04/AFISHA.jpg?fit=1093%2C773&ssl=1'
    },
  ]
export default function MainPage () {
    return (
        <div className="">
            <HeaderComponent isLoggedIn={true} name={'Nafisa Valieva'} role={'Катнашучы'} />
            <main className="container">
                <section  
                style={{
                    display: 'flex',
                    alignItems: 'start',
                    margin: '100px 0' 
                }}>
                    <div className="">
                        <h1 className="text-5xl font-bold">
                            Дусларың белән татар чараларында күңел ач!
                        </h1>
                        <p className="text-lg mb-4">
                            Татарча чараларга, лекцияләргә, күргәзмәләргә һәм башка җирләргә йөр
                        </p>
                        <a className="primary-btn" href="#apply" >Катнашу</a>
                    </div>
                    <div className="">
                        <img src={main} alt="" />
                    </div>
                </section>
                <section className="">
                    <h3 style={{
                        fontSize: '36px',
                        lineHeight: '40px',
                        fontWeight: 'bold'
                    }} 
                    id="apply">Киләсе чаралар</h3>
                    <ul  className="main-events"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        marginTop: '24px'
                    }}>
                        {
                            events?.map((event: any, index: number) => {
                                return (
                                    <li style={{marginTop: '24px'}}>
                                        <EventComponent key={index} name={event.name}
                                        location={event.location}
                                        date={event.date}
                                        price={event.price}
                                        tickets={event.tickets}
                                        description={event.description}
                                        image={event.image} />
                                    </li>
                                )
                            })
                        }
                    </ul>
                </section>
            </main>
            <FooterComponent />
        </div>
    )
}
import { group } from "console";
import React from "react";
import EventComponent from "../components/EventComponent";
import FooterComponent from "../components/FooterComponent";
import GroupComponent from "../components/GroupComponent";
import HeaderComponent from "../components/HeaderComponent";
import { IGroupPageProps} from '../interfaces'

export default function Groups () {
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
    return (
        <div className="">
            <HeaderComponent />
            <div className="container">
                <h2 className="text-3xl font-bold mt-4 mb-4">Төркемнәрне эзләү</h2>
                <div style={{display: 'flex'}}>
                    <input type="text" placeholder="" 
                    style={{
                        borderRadius: '6px',
                        border: '#cecece 1px solid',
                        padding: '6px 12px',
                        backgroundColor: '#fff',
                        width: '60%'
                    }}  />
                    <button className="primary-btn ml-4">Эзләү</button>
                    <button className="secondary-btn ml-4">Фильтрлар куллану</button>
                </div>
                <ul className="groups"
                style={{display: 'flex', flexWrap: 'wrap', marginTop: '24px', height: '47vh'}}>
                    {
                        // @ts-ignore
                        groups.map((group: any, index: number) => {
                            return (
                                <li key={index}>
                                    <GroupComponent name={group.name}
                                people={group.people}
                                image={group.image}
                                tags={group.tags} />
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
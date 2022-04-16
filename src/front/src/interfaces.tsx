import React from "react";

export interface IHeaderComponentProps {
    isLoggedIn?: boolean
    name?: string
    role?: string
}
export interface IEventsPageProps {
    events?: {name: string, 
        description: string,
        location: string,
        date: string,
        tickets: number,
        price: number,
        image: string}[]
}
export interface IGroupPageProps {
    groups?:{
        name?: string,
        people?: number,
        image?: string,
        tags?: string[]}[]
}
export interface IGroupComponentProps {
    name?: string,
    people?: number,
    image?: string,
    tags?: string[]
}
export interface IEventComponentProps {
    name?: string, 
    description?: string,
    location?: string,
    date?: string,
    tickets?: number,
    price?: number,
    image?: string
}
export interface IProfileProps {
    name?: string,
    role?: string,
    groups?: {name?: string, people?: number, image?: string, tags?: string[]}[],
    events? : {name?: string, date?: string, location?:string, image?: string, tags?: string[]}[]
}
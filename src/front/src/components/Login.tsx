import React from "react";
import { Link } from "react-router-dom";

export default function LoginForm () {
    return (
        <div className="container">
            <h1 className="text-6xl font-bold mx-auto my-24">Керү</h1>
            <form action="" className="flex flex-col items-center">
                <div className="flex flex-col mb-4">
                    <label htmlFor="name">E-mail</label>
                    <input type="e-mail" name="name" className="mt-2" placeholder="E-mail" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="mt-2" name="password" />
                </div>
                <button type="submit" className="p-4 rounded-full text-white bg-green-500">Керү</button>
                <span className="block">Аккаутныгызны тапмадыгызмы? <Link to={'/signup'}>Регистрация үтегез</Link></span>
            </form>
        </div>
    )
}
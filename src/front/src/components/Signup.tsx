import React from "react";
import { Link } from "react-router-dom";

export default function SignUpForm () {
    return (
        <div className="container">
            <h1 className="text-6xl font-bold mx-auto my-24">Регистрация үтү</h1>
            <form action="" className="flex flex-col items-center">
                <div className="flex flex-col mb-4">
                    <label htmlFor="surname">Фамилия, Исем</label>
                    <input type="text" name="surname" className="mt-2" placeholder="Фамилия, Исем" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="role">Роль</label>
                    <input type="radio" name="role" className="mt-2" /> Катнашучы
                    <input type="radio" name="role" className="mt-2" /> Оештыручы
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="name">E-mail</label>
                    <input type="e-mail" name="name" className="mt-2" placeholder="E-mail" />
                </div>
                <div className="flex flex-col mb-4">
                    <label htmlFor="password">Пароль</label>
                    <input type="password" className="mt-2" name="password" />
                </div>
                <button type="submit" className="p-4 rounded-full text-white bg-green-500">Керү</button>
                <span>Регистрация үткән идегезме? <Link to={'/login'}>Монда керегез</Link></span>
            </form>
        </div>
    )
}
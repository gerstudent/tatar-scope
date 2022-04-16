import React from "react";
import { Link } from "react-router-dom";

export default function SignUpForm () {
    return (
        <div className="container"
        style={{position:'relative'}}>
            <div className=""
            style={{position: 'absolute', top: '100px', left: '33%'}}>
                <h1 className="text-5xl font-bold"
                style={{textAlign:'center'}}>Регистрация үтү</h1>
                <form action="" className="flex-center"
                style={{flexDirection: 'column'}}>
                    <div className="mb-4"
                    style={{display: 'flex', 
                    flexDirection: 'column',
                    width: '300px'}}>
                        <label htmlFor="surname">Фамилия, Исем</label>
                        <input type="text" name="surname" 
                        style={{
                            borderRadius: '6px',
                            border: 'none',
                            padding: '10px 12px',
                            backgroundColor: '#dcfce7'
                        }} 
                        placeholder="Фамилия, Исем" />
                    </div>
                    <div className=" mb-4"
                    style={{display: 'flex'}}>
                        <label htmlFor="role" className="mr-4">Роль</label>
                        <input type="radio" name="role"/> Катнашучы
                        <div className="ml-4">
                            <input type="radio" name="role" /> Оештыручы
                        </div>
                    </div>
                    <div className="mb-4"
                    style={{display: 'flex', 
                    flexDirection: 'column',
                    width: '300px'}}>
                        <label htmlFor="name">E-mail</label>
                        <input type="e-mail" name="name" 
                        style={{
                            borderRadius: '6px',
                            border: 'none',
                            padding: '10px 12px',
                            backgroundColor: '#dcfce7'
                        }} />
                    </div>
                    <div className="mb-4"
                    style={{display: 'flex', 
                    flexDirection: 'column',
                    width: '300px'}}>
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" 
                        style={{
                            borderRadius: '6px',
                            border: 'none',
                            padding: '10px 12px',
                            backgroundColor: '#dcfce7'
                        }} />
                    </div>
                    <button type="submit" className="primary-btn">Керү</button>
                    <div className="mt-4 text-center">Регистрация үткән идегезме? 
                    <div className="">
                        <Link to={'/login'}>Монда керегез</Link>
                    </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
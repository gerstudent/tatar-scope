import React from "react";
import SignUpForm from "../components/Signup";
import LoginForm from "../components/Login";
import HeaderComponent from "../components/HeaderComponent";

export default function LoginPage ({isSignedUp}: {isSignedUp?: boolean}) {
    return (
        <div className="">
            <HeaderComponent />
            {
                isSignedUp ? <LoginForm /> : <SignUpForm />
            }
        </div>
    )
}
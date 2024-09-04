import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Logo from '../../assets/Logo';

export default function Login() {
    const isAuthenticated = useSelector((state) => !!state.authUser);

    if (isAuthenticated) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get("redirectTo");
        localStorage.setItem('login', isAuthenticated);
        return <Navigate to={redirectUrl || "/"} />;
    }

    return (
        <div className="flex flex-col items-center justify-center w-full p-6 mx-auto">
            <div className="text-6xl">Employee Polls</div>
            <div className="mt-16">
                <Logo />
            </div>
            <div className="w-full">
                <LoginForm />
            </div>
        </div>
    );

}

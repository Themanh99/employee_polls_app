import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import LoginForm from './LoginForm';
import Logo from '../../assets/Logo';
import CryptoJS from 'crypto-js';

export default function Login() {
    const authUser = useSelector((state) => state.authUserReducer);

    if (authUser) {
        const urlParams = new URLSearchParams(window.location.search);
        const redirectUrl = urlParams.get("redirectTo") || "/";
        // Replace this part with your actual authentication logic
        const user = { id: authUser.id, name: authUser.name, avatarURL: authUser.avatarURL };

        // Encrypt the user information before storing it in localStorage
        const encryptedUser = CryptoJS.AES.encrypt(JSON.stringify(user), 'secret_key').toString();
        localStorage.setItem('authUser', encryptedUser);
        localStorage.setItem('login', authUser);

        return <Navigate to={redirectUrl} />;
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

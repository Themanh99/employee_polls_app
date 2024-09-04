import React from 'react';
import { useSelector } from 'react-redux';
import { PATH } from '../../App';

const Header = () => {
    const userLogin = useSelector((state) => (state.authUserReducer));
    return (
        <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <nav className="flex space-x-4">
                <a href={PATH.HOME_URL} className="font-semibold text-gray-700">Home</a>
                <a href={PATH.LEADERBOARD_URL} className="font-semibold text-gray-700">Leaderboard</a>
                <a href={PATH.NEWQUESTION_URL} className="font-semibold text-gray-700">New</a>
            </nav>
            <div className="flex items-center space-x-4">
                <span className="font-semibold">{userLogin && userLogin.name}</span>
                <a href="/logout" className="font-semibold text-blue-500">Logout</a>
            </div>
        </header>
    );
}

export default Header;

import React from 'react';

const Header = () => {
    return (
        <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
            <nav className="flex space-x-4">
                <a href="/home" className="font-semibold text-gray-700">Home</a>
                <a href="/leaderboard" className="font-semibold text-gray-700">Leaderboard</a>
                <a href="/new" className="font-semibold text-gray-700">New</a>
            </nav>
            <div className="flex items-center space-x-4">
                <span className="font-semibold">mtsamis</span>
                <a href="/logout" className="font-semibold text-blue-500">Logout</a>
            </div>
        </header>
    );
}

export default Header;

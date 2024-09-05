import React from 'react';
import { useSelector } from 'react-redux';
import { PATH } from '../../App';
import { Link, useLocation } from 'react-router-dom';
import Avatar from '../Avatar/Avatar';

const Header = () => {
    const userLogin = useSelector((state) => (state.authUserReducer));
    const location = useLocation(); // Get the current URL path

    return (
        <header className="flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-md">
            <nav className="flex space-x-6">
                <Link
                    className={`relative font-semibold text-gray-700 hover:text-black before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full ${location.pathname === PATH.HOME_URL ? 'before:w-full' : ''}`}
                    to={PATH.HOME_URL}
                >
                    Home
                </Link>
                <Link
                    className={`relative font-semibold text-gray-700 hover:text-black before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full ${location.pathname === PATH.LEADERBOARD_URL ? 'before:w-full' : ''}`}
                    to={PATH.LEADERBOARD_URL}
                >
                    Leaderboard
                </Link>
                <Link
                    className={`relative font-semibold text-gray-700 hover:text-black before:absolute before:left-0 before:bottom-0 before:h-[2px] before:w-0 before:bg-black before:transition-all before:duration-300 hover:before:w-full ${location.pathname === PATH.NEWQUESTION_URL ? 'before:w-full' : ''}`}
                    to={PATH.NEWQUESTION_URL}
                >
                    New
                </Link>
            </nav>

            {!!userLogin && (
                <div className="flex items-center space-x-4">
                    <span className="flex items-center justify-center gap-1 font-semibold align-middle">
                        <Avatar alt={userLogin.avatarURL} image={userLogin.avatarURL} />
                        {userLogin && userLogin.name}
                    </span>
                    <Link className="font-semibold text-blue-500" to={"/logout"}>Logout</Link>
                </div>
            )}
        </header>
    );
};

export default Header;

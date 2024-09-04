import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { handleUserLogin } from "../../actions/authUserAction";

const LoginForm = () => {
    const [selectedUser, setSelectedUser] = useState("");
    const [password, setPassword] = useState("admin123");
    const dispatch = useDispatch();
    const userData = useSelector((state) => state.userReducer);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(handleUserLogin(selectedUser, password));
        setSelectedUser("");
        setPassword("");
    };

    const handleSelectUser = (event) => {
        setSelectedUser(event.target.value);
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <div className="w-full max-w-4xl">
                <h1 className="mb-8 text-3xl font-semibold text-center">Log In</h1>

                <form onSubmit={handleSubmit} className="w-full px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">

                    {/* User Select */}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="user">
                            User
                        </label>
                        <select
                            id="user"
                            value={selectedUser}
                            onChange={handleSelectUser}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        >
                            <option value="" disabled>Select a user</option>
                            {Object.values(userData).length > 0 ? (
                                Object.values(userData).map((user, index) => (
                                    <option key={`${user.id}+ ${index}`} value={user.id} >
                                        {user.name}
                                    </option>
                                ))
                            ) : (
                                <option disabled>No users available</option>
                            )}
                        </select>
                    </div>

                    {/* Password Input */}
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!selectedUser || !password ? "opacity-50 cursor-not-allowed" : ""
                                }`}
                            disabled={!selectedUser || !password}
                        >
                            Login
                        </button>
                    </div>
                </form>
            </div >
        </div >
    );
};

export default LoginForm;

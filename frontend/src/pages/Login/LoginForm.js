import React, { useState } from "react";

const LoginForm = () => {
    // Sample data for the select dropdown
    const userData = [
        { id: 1, name: "User 1" },
        { id: 2, name: "User 2" },
        { id: 3, name: "User 3" }
    ];

    const [selectedUser, setSelectedUser] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle login logic here
        console.log("Selected User:", selectedUser);
        console.log("Password:", password);
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
                            onChange={(e) => setSelectedUser(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        >
                            <option value="" disabled>Select a user</option>
                            {userData.map(user => (
                                <option key={user.id} value={user.name}>
                                    {user.name}
                                </option>
                            ))}
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
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;

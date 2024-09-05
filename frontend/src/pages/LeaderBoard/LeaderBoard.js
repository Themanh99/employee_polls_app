import React from 'react';
import { useSelector } from 'react-redux';
import Avatar from '../../components/Avatar/Avatar';

const LeaderBoard = () => {
    const users = useSelector((state) => state.userReducer);

    // Format the user list for display
    const formattedUsers = Object.values(users).map(({ id, name, avatarURL, answers, questions }) => ({
        id,
        name,
        avatar: avatarURL,
        answered: Object.keys(answers || {}).length,
        created: questions?.length || 0,
    }));

    // Sort users based on their total activity (answered + created questions)
    const sortedUsers = formattedUsers.sort(
        (a, b) => (b.answered + b.created) - (a.answered + a.created)
    );

    return (
        <div className="flex justify-center p-6">
            <table className="w-full max-w-lg bg-white rounded-lg shadow-md table-auto">
                <thead>
                    <tr className="text-left bg-gray-100">
                        <th className="px-4 py-2 text-gray-600">Users</th>
                        <th className="px-4 py-2 text-gray-600">Answered</th>
                        <th className="px-4 py-2 text-gray-600">Created</th>
                    </tr>
                </thead>
                <tbody>
                    {sortedUsers.map(({ id, name, avatar, answered, created }) => (
                        <tr className="border-t" key={id}>
                            <td className="flex items-center px-4 py-4">
                                <Avatar alt={name} image={avatar} />
                                <div className="ml-4">
                                    <p className="font-medium text-blue-600">{name}</p>
                                    <p className="text-sm text-gray-400">{id}</p>
                                </div>
                            </td>
                            <td className="px-4 py-4">{answered}</td>
                            <td className="px-4 py-4">{created}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default LeaderBoard;

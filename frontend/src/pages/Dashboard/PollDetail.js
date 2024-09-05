import React from 'react';
import Avatar from '../../components/Avatar/Avatar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { handleAddAnswer } from '../../actions/questionAction';

function PollDetail(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { id } = useParams();
    const authUser = useSelector((state) => state.authUserReducer);
    const userList = useSelector((state) => state.userReducer);
    const questionList = useSelector((state) => state.questionReducer);

    const question = questionList[id];

    if (!question) {
        return <p>Question not found</p>;
    }

    // Check if the logged-in user has already answered the poll
    const isAnswer =
        question.optionOne.votes.includes(authUser.id) ||
        question.optionTwo.votes.includes(authUser.id);

    const handleOptionOne = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionOne"));
        navigate("/");
    };

    const handleOptionTwo = (e) => {
        e.preventDefault();
        dispatch(handleAddAnswer(question.id, "optionTwo"));
        navigate("/");
    };


    return (
        <div className="flex flex-col items-center w-4/5 p-6 mx-auto bg-white rounded-lg shadow-lg">
            <div className="flex flex-col items-center">
                <Avatar className="w-24 h-24 mb-4 rounded-full" alt={userList[question.author].id} image={userList[question.author].avatarURL} />

                <h2 className="mb-4 text-2xl font-bold">Poll by {question.author}</h2>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-semibold">Would You Rather</h3>
            </div>
            <div className="flex justify-around w-full">
                <button className="px-6 py-3 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600 disabled:bg-gray-300"
                    disabled={isAnswer}
                    onClick={handleOptionOne}
                >
                    {question.optionOne.text}
                </button>
                <button className="px-6 py-3 text-white transition duration-300 bg-green-500 rounded-lg hover:bg-green-600 disabled:bg-gray-300"
                    disabled={isAnswer}
                    onClick={handleOptionTwo}
                >
                    {question.optionTwo.text}
                </button>
            </div>

            {isAnswer && (
                <p className="mt-4 text-sm text-gray-500">
                    You have already voted for this poll.
                </p>
            )}
        </div>
    );
}

export default PollDetail;

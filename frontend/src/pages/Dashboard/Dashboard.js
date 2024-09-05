import React from 'react';
import Card from '../../components/Card/Card';
import { useSelector } from 'react-redux';

const QuestionList = ({ title, questions, userList, emptyMessage }) => (
    <div className='w-full border-2 rounded-md min-h-60'>
        <h1 className='flex justify-center text-2xl border-b-2'>{title}</h1>
        <div className='flex flex-wrap gap-5 p-4'>
            {questions.length > 0 ? (
                questions.map((question) => (
                    <Card key={question.id} question={question} author={userList[question.author]} />
                ))
            ) : (
                <p className='w-full text-center'>{emptyMessage}</p>
            )}
        </div>
    </div>
);

export default function Dashboard() {
    const authUser = useSelector((state) => state.authUserReducer);
    const userList = useSelector((state) => state.userReducer);
    const questionList = useSelector((state) => state.questionReducer);

    const questionsArray = questionList ? Object.values(questionList) : [];

    // Sort by timestamp in descending order
    const sortedQuestions = questionsArray.sort((a, b) => b.timestamp - a.timestamp);

    const answeredQuestions = sortedQuestions.filter(
        (question) =>
            question.optionOne.votes.includes(authUser.id) ||
            question.optionTwo.votes.includes(authUser.id)
    );

    const newQuestions = sortedQuestions.filter(
        (question) =>
            !question.optionOne.votes.includes(authUser.id) &&
            !question.optionTwo.votes.includes(authUser.id)
    );

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='flex flex-col items-center justify-center w-4/5 gap-10 mt-10 align-middle'>
                <QuestionList
                    title="New Questions"
                    questions={newQuestions}
                    userList={userList}
                    emptyMessage="No new questions available."
                />
                <QuestionList
                    title="Done"
                    questions={answeredQuestions}
                    userList={userList}
                    emptyMessage="You haven't answered any questions yet."
                />
            </div>
        </div>
    );
}

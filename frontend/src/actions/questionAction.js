import { saveQuestion, saveQuestionAnswer } from "../utils/api";
import { addAnswerUser, addQuestionUser } from "./userAction";

export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_ANSWER_QUESTION = "ADD_ANSWER_QUESTION";
export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";

// Action creators
export const receiveAllQuestions = (questions) => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions,
});

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question,
});

const addAnswerQuestion = (author, questionId, answer) => ({
    type: ADD_ANSWER_QUESTION,
    author,
    questionId,
    answer,
});

// Thunk actions
export const handleAddQuestion = (firstOption, secondOption) => async (dispatch, getState) => {
    const { authUserReducer } = getState();

    try {
        const question = await saveQuestion(firstOption, secondOption, authUserReducer);
        dispatch(addQuestion(question));
        dispatch(addQuestionUser(question));
    } catch (error) {
        console.error("Error adding question:", error);
    }
};

export const handleAddAnswer = (questionId, answer) => async (dispatch, getState) => {
    const { authUserReducer } = getState();

    try {
        await saveQuestionAnswer(authUserReducer.id, questionId, answer);
        dispatch(addAnswerQuestion(authUserReducer.id, questionId, answer));
        dispatch(addAnswerUser(authUserReducer.id, questionId, answer));
    } catch (error) {
        console.error("Error adding answer:", error);
    }
};

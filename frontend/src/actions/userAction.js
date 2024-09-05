export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const ADD_ANSWER_USER = "ADD_ANSWER_USER";
export const ADD_QUESTION_USER = "ADD_QUESTION_USER";

// Action creator: Nhận tất cả người dùng
export const receiveAllUsers = (users) => ({
    type: RECEIVE_ALL_USERS,
    users,
});

// Action creator: Thêm câu trả lời cho người dùng
export const addAnswerUser = (authedUser, qid, answer) => ({
    type: ADD_ANSWER_USER,
    authedUser,
    qid,
    answer,
});

// Action creator: Thêm câu hỏi cho người dùng
export const addQuestionUser = ({ author, id }) => ({
    type: ADD_QUESTION_USER,
    author,
    qid: id,
});

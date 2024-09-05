import { ADD_ANSWER_USER, ADD_QUESTION_USER, RECEIVE_ALL_USERS } from "../actions/userAction";


export default function userReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_USERS:
            return {
                ...state,
                ...action.users,
            };

        case ADD_ANSWER_USER: {
            const { authedUser, qid, answer } = action;

            return {
                ...state,
                [authedUser]: {
                    ...state[authedUser],
                    answers: {
                        ...state[authedUser].answers,
                        [qid]: answer,
                    },
                },
            };
        }

        case ADD_QUESTION_USER: {
            const { author, qid } = action;

            return {
                ...state,
                [author.id]: {
                    ...state[author.id],
                    questions: [...state[author.id].questions, qid],
                },
            };
        }

        default:
            return state;
    }
}

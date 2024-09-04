import { ADD_ANSWER_QUESTION, ADD_QUESTION, RECEIVE_ALL_QUESTIONS } from "../actions/questionAction";


export default function questionReducer(state = {}, action) {
    switch (action.type) {
        case RECEIVE_ALL_QUESTIONS:
            return {
                ...state,
                ...action.allQuestions,
            };

        case ADD_QUESTION:
            return {
                ...state,
                [action.question.id]: action.question,
            };

        case ADD_ANSWER_QUESTION: {
            const { qid, answer, author } = action;
            const question = state[qid];

            return {
                ...state,
                [qid]: {
                    ...question,
                    [answer]: {
                        ...question[answer],
                        votes: question[answer].votes.concat(author),
                    },
                },
            };
        }

        default:
            return state;
    }
}

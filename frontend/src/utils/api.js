import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from './_DATA'

export function getInitialData() {
    return Promise.all([_getUsers(), _getQuestions()]).then(
        ([allUsers, allQuestions]) => ({
            allUsers,
            allQuestions,
        })
    );
}

export function saveQuestion(optionOneText, optionTwoText, author) {
    return _saveQuestion({ optionOneText, optionTwoText, author });
}

export function saveQuestionAnswer(userId, questionId, answer) {
    return _saveQuestionAnswer({
        authedUser: userId,
        qid: questionId,
        answer,
    });
}

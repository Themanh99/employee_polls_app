import { _saveQuestion, _saveQuestionAnswer } from './_DATA';

describe('_saveQuestion', () => {
    it('should return the saved question with all expected fields populated when correctly formatted data is passed', async () => {
        const question = {
            optionOneText: 'Option One text',
            optionTwoText: 'Option Two text',
            author: 'johndoe'
        };

        const result = await _saveQuestion(question);

        expect(result).toHaveProperty('id');
        expect(result).toHaveProperty('timestamp');
        expect(result).toHaveProperty('author', 'johndoe');
        expect(result.optionOne).toHaveProperty('text', 'Option One text');
        expect(result.optionOne).toHaveProperty('votes', []);
        expect(result.optionTwo).toHaveProperty('text', 'Option Two text');
        expect(result.optionTwo).toHaveProperty('votes', []);
    });

    it('should throw an error when incorrect data is passed', async () => {
        const invalidQuestion = {
            optionOneText: 'Option One text',
        };

        await expect(_saveQuestion(invalidQuestion)).rejects.toEqual('Invalid data');
    });

    it('should return the saved question and match the snapshot when correctly formatted data is passed', async () => {
        const question = {
            optionOneText: 'Option One text',
            optionTwoText: 'Option Two text',
            author: 'johndoe'
        };

        const result = await _saveQuestion(question);
        const { id, timestamp, ...filteredResult } = result;

        delete result.timestamp;

        expect(filteredResult).toMatchSnapshot();
    });

    // New test cases
    it('should throw an error when all fields are missing', async () => {
        const invalidQuestion = {};

        await expect(_saveQuestion(invalidQuestion)).rejects.toEqual('Invalid data');
    });

    it('should throw an error when only optionTwoText is provided', async () => {
        const invalidQuestion = {
            optionTwoText: 'Option Two text',
        };

        await expect(_saveQuestion(invalidQuestion)).rejects.toEqual('Invalid data');
    });

});

describe('_saveQuestionAnswer', () => {
    it('should return true when correctly formatted data is passed', async () => {
        const answer = {
            authedUser: 'sarahedo',
            questionId: '8xf0y6ziyjabvozdd253nd',
            answer: 'optionOne'
        };

        const result = await _saveQuestionAnswer(answer);

        expect(result).toBeUndefined();
    });

    it('should throw an error when incorrect data is passed', async () => {
        const invalidAnswer = {
            authedUser: 'sarahedo',
        };

        await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual('Invalid data');
    });

    // New test cases
    it('should throw an error when authedUser is missing', async () => {
        const invalidAnswer = {
            questionId: '8xf0y6ziyjabvozdd253nd',
            answer: 'optionOne'
        };

        await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual('Invalid data');
    });

    it('should throw an error when questionId is missing', async () => {
        const invalidAnswer = {
            authedUser: 'sarahedo',
            answer: 'optionOne'
        };

        await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual('Invalid data');
    });

    it('should throw an error when answer is missing', async () => {
        const invalidAnswer = {
            authedUser: 'sarahedo',
            questionId: '8xf0y6ziyjabvozdd253nd',
        };

        await expect(_saveQuestionAnswer(invalidAnswer)).rejects.toEqual('Invalid data');
    });
});

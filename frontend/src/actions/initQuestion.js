
import { getInitialData } from '../utils/api'
import { receiveAllQuestions } from "./questionAction";
import { receiveAllUsers } from "./userAction";

export const handleInitialData = () => async (dispatch) => {
    try {
        const { users, questions } = await getInitialData();

        dispatch(receiveAllUsers(users));
        dispatch(receiveAllQuestions(questions));
    } catch (error) {
        console.error("Error fetching initial data:", error);
    }
};

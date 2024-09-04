
import { getInitialData } from "../service/api";
import { receiveAllQuestions } from "./questionAction";
import { receiveAllUsers } from "./userAction";

export const handleInitialData = () => async (dispatch) => {
    try {
        const { allUsers, allQuestions } = await getInitialData();
        dispatch(receiveAllUsers(allUsers));
        dispatch(receiveAllQuestions(allQuestions));
    } catch (error) {
        console.error("Error fetching initial data:", error);
    }
};

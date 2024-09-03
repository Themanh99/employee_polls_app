const logger = (store) => (next) => (action) => {
    console.group(action.type);
    console.log("Action: ", action);
    const newValue = next(action);
    console.log("Value of new state: ", store.getState());
    console.groupEnd();

    return newValue;
};

export default logger;
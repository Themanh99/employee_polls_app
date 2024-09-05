// Helper function to format date and time
export const formatDateTime = (date) => {
    // Format the time part (4:11 PM)
    const timeOptions = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true,
    };
    const formattedTime = date.toLocaleString('en-US', timeOptions);

    // Format the date part (11/23/2021)
    const dateOptions = {
        month: '2-digit',
        day: '2-digit',
        year: 'numeric',
    };
    const formattedDate = date.toLocaleString('en-US', dateOptions);

    return `${formattedTime} | ${formattedDate}`;
};

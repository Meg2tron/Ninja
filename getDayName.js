// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
function getDayName(dateString) {
    if (typeof dateString !== 'string' || !dateString instanceof String)
        throw (new Error('Provide valid inputs'))
    const dayName = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let date = new Date(dateString);
    return dayName[date.getDay()];
}


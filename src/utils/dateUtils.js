const calculateWeek = (date) => {
    // Logic to calculate week number from a date
    // Parse the input date string (assuming the format is DD-MM-YYYY)
    const [day,month,year] = date.split('-').map(Number);
    const parsedDate = new Date(year,month - 1, day);
    // Calculate the first day of the year
    const startOfYear = new Date(parsedDate.getFullYear(),0,1);
    // Calculate the difference in days
    const daysSinceStartOfYear = Math.floor((parsedDate - startOfYear) / (24*60*60*1000));
     // Get the week number
    const weekNumber = Math.ceil((daysSinceStartOfYear + startOfYear.getDay() + 1)/7);

    return weekNumber;
};



module.exports = { calculateWeek};

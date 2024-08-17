const orders = require('../../data/order.json')
const {calculateWeek} = require('../utils/dateUtils.js')

const getWeekWiseSales = (req,res) =>{
    const salesData = {};

    orders.forEach(order =>{
        const weekNumber = calculateWeek(order.OrderDate);
        const orderType = order.TypeOfOrder;
        const orderAmount = parseFloat(order.OrderAmount);

        if(!salesData[weekNumber]){
            salesData[weekNumber] = {};
        }
        if(!salesData[weekNumber][orderType]){
            salesData[weekNumber][orderType] = 0;
        }
        salesData[weekNumber][orderType] += orderAmount;
    })
    const result = Object.entries(salesData).map(([week, types]) => ({
        [`week${week}`]: {
            ...Object.fromEntries(
                Object.entries(types).map(([type, amount]) => [type, `$${amount.toLocaleString()}`])
            )
        }
    }));
    res.json(result);
}

const getHighestBusinessDate = (req,res) =>{
    const salesByDate = {};

    orders.forEach(order =>{
        const date = order.OrderDate;
        const orderAmount = parseFloat(order.OrderAmount);

        if(!salesByDate[date]){
            salesByDate[date] = 0;

        }
        salesByDate[date] += orderAmount;

    });
    let highestSalesDate = '';
    let maxSales = 0;
    for(const [date,totalSales] of Object.entries(salesByDate)){
        if(totalSales > maxSales){
            maxSales = totalSales;
            highestSalesDate = date;
        }
    }
    res.json({
        date: highestSalesDate
    })
}

const getPercentageChange = (req,res) =>{
    const weeklySales = {};

    orders.forEach(order => {
        const weekNumber = calculateWeek(order.OrderDate);
        const orderAmount = parseFloat(order.OrderAmount);

        if (!weeklySales[weekNumber]) {
            weeklySales[weekNumber] = 0;
        }

        weeklySales[weekNumber] += orderAmount;
    });

    const sortedWeeks = Object.keys(weeklySales).sort((a, b) => a - b);

    const percentageChanges = {};
    for (let i = 1; i < sortedWeeks.length; i++) {
        const currentWeek = sortedWeeks[i];
        const previousWeek = sortedWeeks[i - 1];

        const currentSales = weeklySales[currentWeek];
        const previousSales = weeklySales[previousWeek];

        const percentageChange = ((currentSales - previousSales) / previousSales) * 100;
        const formattedChange = percentageChange >= 0 
            ? `+${percentageChange.toFixed(2)}%` 
            : `${percentageChange.toFixed(2)}%`;

        const changeKey = `week${previousWeek}_to_week${currentWeek}`;
        percentageChanges[changeKey] = formattedChange;
    }

    res.json(percentageChanges);
}

const getBusinessImprovement = (req,res) =>{
     const weeklySales = {};

     orders.forEach(order => {
         const weekNumber = calculateWeek(order.OrderDate);
         const orderAmount = parseFloat(order.OrderAmount);
 
         if (!weeklySales[weekNumber]) {
             weeklySales[weekNumber] = 0;
         }
 
         weeklySales[weekNumber] += orderAmount;
     });
 
     const sortedWeeks = Object.keys(weeklySales).sort((a, b) => a - b);
 
     let improvement = true;
     const weeklySalesFormatted = {};
     
     for (let i = 0; i < sortedWeeks.length; i++) {
         const week = sortedWeeks[i];
         const sales = weeklySales[week];
         weeklySalesFormatted[`week${week}`] = `$${sales.toLocaleString()}`;
 
         if (i > 0 && weeklySales[sortedWeeks[i]] < weeklySales[sortedWeeks[i - 1]]) {
             improvement = false;
         }
     }
 
     const result = {
         ...weeklySalesFormatted,
         improvement
     };
 
     res.json(result);
}

module.exports = {
    getWeekWiseSales,
    getBusinessImprovement,
    getPercentageChange,
    getHighestBusinessDate
}
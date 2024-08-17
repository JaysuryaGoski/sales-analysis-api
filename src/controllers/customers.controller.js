const addresses = require('../../data/address.json')
const orders = require('../../data/order.json');

const getCustomersWithOrders = (req,res) =>{
    const customerData = {};
    orders.forEach(order =>{
        const customerId = order["Customer ID"];
        const orderAmount = parseFloat(order.OrderAmount);
        const customer = addresses.find(cust => cust.CustomerID === customerId);

        if(customer){
            if(customerData[customerId]){
                customerData[customerId].totalOrderValue += orderAmount;
            }else{
                let name = customer.FirstName + ' ' + customer.LastName;
                let address = customer.Address + ','+ customer.City;
                customerData[customerId] = {
                    name: name,
                    address: address,
                    totalOrderValue: orderAmount
                };

            }
        }
    });
    const result = Object.values(customerData);
    res.json(result);
}

module.exports = {getCustomersWithOrders}
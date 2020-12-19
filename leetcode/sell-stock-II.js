
//reduce method

const maxProfit = (prices) => {
    return prices.reduce((profit, price, i, prices) => {
        prices[i + 1] > prices[i] ? profit += prices[i + 1] - prices[i] : profit
    }, 0)
}


// extended method

const profit = (prices) => {

    // set an accumulator
    let prof = 0;

    // for every value of price
    for (let i = 0; i < prices.length; i++) {

        // if the current value is less than the next value
        if (prices[i] < prices[i + 1]) {

            // save the difference between the two (profit)
            let currentProf = prices[i + 1] - prices[i];

            // add that difference to the total profit
            prof += currentProf;
        }
    }

    // return total profit
    return prof
}


// start thinking of point on arrays as line graph. only get the upswings if its profit. 
// important to recognize pattern of having a positive difference


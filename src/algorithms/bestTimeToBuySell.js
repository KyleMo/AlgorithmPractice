
const maxProfit = (prices) => {
    let lowestPrice = prices[0];
    let highestPrice = 0;
    let newArr = []
    
    for (let i=0; i<prices.length; i++){
        if(prices[i] < lowestPrice){
            lowestPrice = prices[i]
            newArr = prices.slice(i)
        }
        
    }

    for (let i=0; i < newArr.length; i++){
        if (newArr[i] > highestPrice){
            highestPrice = newArr[i]
        }
    }

    return highestPrice - lowestPrice

}

export default maxProfit;
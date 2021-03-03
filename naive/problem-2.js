function evenSumFibonacci(limit=4000000){
    let [previous, current, evenSum] =[0, 1, 0]
    while(current < limit){
        let temp = previous + current;
        evenSum = temp%2==0 ? evenSum + temp : evenSum;
        previous = current;
        current = temp;
    }
    return evenSum;
}
module.exports = evenSumFibonacci();
function sumSquareDifference(limit=100){
    let naturalNumbers = new Array(limit).fill(null).map((blank,index)=>{
        return index+1;
    });
    let sumOfSquares = naturalNumbers.map((num)=>{
        return Math.pow(num,2); 
    }).reduce((acc,value)=>{
        return acc+value;
    });
    let squareOfSum = Math.pow(naturalNumbers.reduce((acc,value)=>{return acc+value},0),2);
    let difference = squareOfSum-sumOfSquares;
    return difference;
}
module.exports = sumSquareDifference();
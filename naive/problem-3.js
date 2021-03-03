function largestPrimeFactor(number=600851475143){
    let factor = 2;
    while(factor < number){
        if(number%factor==0){
            number=number/factor
        }
        factor++;
    }
    return number;
}
module.exports = largestPrimeFactor();
function smallestMultiple(factors=[]){
    let commonPrimeFactors = {};
    factors.forEach((factor)=>{
        let factorPrimeFactors = primeFactors(factor);
        Object.entries(factorPrimeFactors).forEach((entry)=>{
            if(entry[0] in commonPrimeFactors){
                if(entry[1] > commonPrimeFactors[entry[0]]){
                    commonPrimeFactors[entry[0]]=entry[1];
                }
            }
            else{
                commonPrimeFactors[entry[0]]=entry[1];
            }
        });
    });
    let lcmProduct = 1;
    Object.entries(commonPrimeFactors).forEach((entry)=>{
        lcmProduct = lcmProduct * Math.pow(parseInt(entry[0]),entry[1]);
    });
    return lcmProduct;
}
function primeFactors(number){
    let primeFactors = {};
    let factor = 2;
    while(factor <= number){
        if(number%factor==0){
            number=number/factor;
            if(!(factor in primeFactors)){
                primeFactors[factor]=0;
            }
            primeFactors[factor]++;
        }
        else{
            factor++;
        }
    }
    return primeFactors;
}

let factors = new Array(20).fill(null).map((blank,index)=>{return index+1})
module.exports = smallestMultiple(factors); 
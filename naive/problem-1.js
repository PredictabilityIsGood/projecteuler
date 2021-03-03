function sumFactors(factors=[3,5],limit=1000){
    let current = 1;
    let sum = 0;
    while(current <  limit){
        for(var i=0; i<factors.length; i++){
            if(current%factors[i]==0){
                sum += current;
                i = factors.length;
            }
        }
        current++;
    }
    return sum;
}
module.exports = sumFactors();
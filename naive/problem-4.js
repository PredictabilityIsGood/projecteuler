function largestPalindromeProduct(min=100,max=999){
    let palindrome = 0;
    let maxFactors = {
        i:0,
        x:0
    };
    for(let i=max;i>=min;i--){
        for(let x=max;x>=min;x--){
            let product = (x*i);
            if(product>palindrome){
                let productarr = product.toString().split("");
                if(productarr.join("") === productarr.reverse().join("")){
                    palindrome = product;
                    maxFactors.i = i;
                    maxFactors.x = x;
                }
            }
            else{
                break;
            }
        }
    }
    return palindrome;
};

module.exports = largestPalindromeProduct();
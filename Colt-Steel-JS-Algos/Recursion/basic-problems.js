function power(base, exp){
    if(exp === 0) return 1;
    return base * power(base, exp - 1);
}

function factorial(num){
    if(num < 0 ) return 0;
    if(num <= 1) return 1;
    return num * factorial(num - 1);
}
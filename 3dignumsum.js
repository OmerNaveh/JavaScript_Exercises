function getSum(number)
{
    let sum=0;
    while(number!=0)
    {
        sum+=(number%10);
        number =parseInt(number/10);
    }
    return sum;
}       

console.log(getSum(123));
console.log(getSum(666));
console.log(getSum(572));
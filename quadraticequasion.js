
function equation(a,b,c)
{
let solutionA = (((-1*b) + (Math.sqrt(Math.pow(b,2) - (4*a*c) )))/ (2*a));
let solutionB = (((-1*b) - (Math.sqrt(Math.pow(b,2) - (4*a*c) )))/ (2*a));
return solutionA  +" "+ solutionB;
}
Math.sqrt()

alert(equation(1,-8,12));


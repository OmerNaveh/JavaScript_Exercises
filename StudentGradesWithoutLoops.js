const grades = [50,78,92,65]
// your code goes here
function GetRange(grades)
{
 grades.sort(function(a, b){return a-b});
 let min=grades[0];
let max= grades[(grades.length-1)];
let rangeGrades= max - min;
return rangeGrades;
}
alert(GetRange(grades));

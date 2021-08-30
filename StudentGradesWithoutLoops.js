const grades = [50,78,92,65,55]
// your code goes here
grades.sort(function(a, b){return a-b}); // arranging the array from lowest to highest

function GetRange(grades) // Gets The Range
{
 let min=grades[0];
let max= grades[(grades.length-1)];
let rangeGrades= max - min;
return rangeGrades;
}
function GetMedian(grades)
{
    return grades[Math.floor(grades.length/2)];
}

alert(GetMedian(grades));
// alert(GetRange(grades));

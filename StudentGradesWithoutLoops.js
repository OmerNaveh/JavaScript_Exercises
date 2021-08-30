const grades = [50,78,92,65,55]
// your code goes here


function GetRange(grades) // Gets The Range
{
 grades.sort(function(a, b){return a-b}); // arranging the array from lowest to highest
 let min=grades[0];
let max= grades[(grades.length-1)];
let rangeGrades= max - min;
return rangeGrades;
}
function GetMedian(grades)
{
    grades.sort(function(a, b){return a-b}); // arranging the array from lowest to highest
    return grades[Math.floor(grades.length/2)];
}

function GetHalfRange(grades)
{
    let CalcArray= grades.slice(Math.floor(grades.length/2));
    let halfrange = GetRange(CalcArray);
    return halfrange;
}


alert(GetHalfRange(grades));

// alert(GetMedian(grades));
// alert(GetRange(grades));

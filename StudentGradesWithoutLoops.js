const grades = [50,78,92,65,55]
// your code goes here


function GetRange(grades) // Gets The Range
{
newArr=grades.slice();
 newArr.sort(function(a, b){return a-b}); // arranging the array from lowest to highest
 let min=newArr[0];
let max= newArr[(newArr.length-1)];
let rangeGrades= max - min;
return rangeGrades;
}
function GetMedian(grades)
{
    newArr=grades.slice();
    newArr.sort(function(a, b){return a-b}); // arranging the array from lowest to highest
    return newArr[Math.floor(newArr.length/2)];
}

function GetHalfRange(grades)
{
    let CalcArray= grades.slice(Math.floor(grades.length/2));
    let halfrange = GetRange(CalcArray);
    return halfrange;
}
console.log("Stats: \n" + "Range: " + GetRange(grades)+ "\nMedian: " +GetMedian(grades) + "\nHalfRange: " + GetHalfRange(grades));

// alert(GetHalfRange(grades));
// alert(GetMedian(grades));
// alert(GetRange(grades));

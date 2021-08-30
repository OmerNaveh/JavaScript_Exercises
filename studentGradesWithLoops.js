function rangeGrades(gradeArr) // Calculates Range between highest and lowest grade in an array
{
    const calcRange= GetMax(gradeArr) - GetMin(gradeArr);
    return calcRange;
    
}

function GetMax(values) // find the highest grade
{
    let max=0;
    for(let i=0; i<values.length; i++)
    {
        if(values[i]>max)
        {
            max=values[i];
        }
    }
    return max;
}


function GetMin(values) // find the lowest grade
{
    {
        let min=100;
        for(let i=0; i<values.length; i++)
        {
            if(values[i]<min)
            {
                min=values[i];
            }
        }
        return min;
    }
}

function GetMedian(gradeArr) //Finds Median
{
    gradeArr.sort(function(a, b){return a-b}); // arranging the array from lowest to highest
    if(gradeArr.length % 2 ===0)
    {
        let median= (((gradeArr[gradeArr.length/2-1]) + (gradeArr[(gradeArr.length/2)])) /2);
        return median;

    }
    return gradeArr[Math.floor(gradeArr.length/2)];
    
}



const grades = [10,20,30,40,50,60] ;
// alert(GetMedian(grades));
// alert(rangeGrades(grades));

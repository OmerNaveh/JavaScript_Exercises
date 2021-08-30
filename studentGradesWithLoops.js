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




const grades = [73, 91, 88, 56, 62, 84, 95, 96, 88, 92] ;
alert(rangeGrades(grades));

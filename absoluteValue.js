// function absolute(number)
// {
//     if(number<0)
//     {
//         return number*(-1)
//     }
//     return number;
// }

// alert(absolute(-17))


function mutation(arr)
{
    let str=arr[0].toLowerCase();
    let str2=arr[1].toLowerCase();
    // let counter=0;
    for(let i of str2)  
    {
        if(!str.includes(i))
        {
            return false;
            // counter++;
        }
    } 
    // if(counter==str2.length)
    return true;
    // else return false;
}
//console.log(mutation(["string", "striiiiiiii"]))

function chuck(arr,size)
{
    let newArr=[];
for(let i=0; i<arr.length; i+=size)
{
newArr.push(arr.slice(i,i+size));
}
return newArr;
}

// console.log(chuck([1,2,3,4,5,6,7,8], 5))
function convertToRoman(num) {
    var decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var romanNumeral = [
      "M",
      "CM",
      "D",
      "CD",
      "C",
      "XC",
      "L",
      "XL",
      "X",
      "IX",
      "V",
      "IV",
      "I"
    ];
    var converted="";
  
   for(let i=0; i<decimalValue.length; i++)
   {
     while(num>=decimalValue[i])
     if(num>=decimalValue[i])
     {
       converted+=romanNumeral[i];
       num=num-decimalValue[i]
     }
   }
   return converted;
  //  return num;
  }
  
//   console.log(convertToRoman(36));

function SumAll(arr)
{
    arr.sort((a,b) => a-b);
    let sum=0;
    for(let i=arr[0]; i<=arr[1] ; i++)
    {
        sum+=i;
        arr[0]++;
    }
    return sum;
}

// console.log(SumAll([1,4]));

function pilandrome(str)
{
  let str2= str.replace(/[^0-9a-z]/gi, '').toLowerCase(); //extract all non alphanumeric characters
  let workingArr=str2.split(""); //split str into an array based on spaces
  for(let i=0; i<workingArr.length; i++)
  {
    if(workingArr[i]===workingArr[workingArr.length-1-i]) 
    {
        
    }
    else{
      return false;}
  }
  return true;
}
// console.log(pilandrome("eye"));

function filteredArray(arr, elem)
{
  let newArr=[];
  let count =0;
  for(let i=0 ; i<arr.length ; i++) //runs on all the element of the large array arr[0]= [1,2,3]
  {
    for(let j=0; j<arr[i].length; j++) //runs on all the elemnts of the sub array arr[0][j] 1
    {
      if(arr[i][j]===elem)    //if the value of the subarray equals to the element
      {
        count++;
      }
    }
    if(count===0)
    {
      newArr.push(arr[i])
    }
  count=0;
  }
  return newArr;
}
//console.log(filteredArray([[1,2,3],[2,3,4],[3,4,5]],2))

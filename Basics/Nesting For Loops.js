/*
Instructions

Modify function multiplyAll so that it returns the product of all the numbers in the sub-arrays of arr.

multiplyAll([[1],[2],[3]]) should return 6
multiplyAll([[1,2],[3,4],[5,6,7]]) should return 5040
*/

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++)
  {
    for (var ii = 0; ii < arr[i].length; ii++)
    {
        product = product*arr[i][ii];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);

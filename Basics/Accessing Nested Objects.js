/*
Instructions

Access the myStorage object and assign the contents of the glove box property to the gloveBoxContents variable. 
Use dot notation for all properties where possible, otherwise use bracket notation.

gloveBoxContents should equal "maps".
Your code should use dot and bracket notation to access myStorage.
*/

// Setup
var myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

var gloveBoxContents = myStorage.car.inside["glove box"]; // Change this line

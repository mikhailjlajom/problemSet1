// Problem Set 1
// You are to cluster different elements into different groups.
// Each element has a numerical attribute that needs to be optimized.
// The resulting group should have the most optimal sum of the numerical attribute. The optimal sum should be applicable to all resulting groups.
// Input: [A, B, C]
// [300, 400, 600]
// Output: [A, B], [C]
// Because
// [700], [600]//

//Name Variables for input
let strInput = ["A", "B", "C"]
let intInput =[300,400,600]

//Name Variable for Results

let result = []

//Function to combine two lists to make object with key/value pairs
function convertObj(a,b){
    if(a.length != b.length ||
        a.length == 0 ||
        b.length == 0 ){
            return null;
        }
        let object = {};

        a.forEach((k, i) =>
        { obj[k] = b[i] })
        return obj;
}

console.log(convertObj(strInput, intInput))
/*Problem Set 1
You are to cluster different elements into different groups.
Each element has a numerical attribute that needs to be optimized.
The resulting group should have the most optimal sum of the numerical attribute. The optimal sum should be applicable to all resulting groups.
Input: [A, B, C]
[300, 400, 600]
Output: [A, B], [C]
Because
[700], [600]*/

//Name Variables for input
let strInput = ["A", "B", "C", "D", "E"];
let intInput = [300, 400, 600, 1, 99];

//Function to combine two lists to make object with key/value pairs
function convertObj(a, b) {
  if (a.length != b.length || a.length == 0 || b.length == 0) {
    return null;
  }
  let object = a.reduce((acc, element, index) => {
    return {
      ...acc,
      [element]: b[index],
    };
  }, {});
  return object;
}

//Function to calculate the total sum and target sum
//this function is used to determine the target sum for each group since the elements will be split into groups depending the sum of each key's value

function findTargetSum(intArray) {
  let totalSum = intArray.reduce((acc, curr) => acc + curr, 0);
  let targetSum = totalSum / 2;
  return targetSum;
}

//Function to group the elements/keys based on calculation of the sum of their values
//this function is used to group keys that go together based on the the total sum of their values which is optimized to be as close as to the target sum
//I used math.abs to compare the absolute difference of each sum to be as close as to the target sum

function groupKeys(sortedValues, targetSum) {
  let group1 = [];
  let group2 = [];
  let sum1 = 0;
  let sum2 = 0;

  for (let [key, value] of Object.entries(sortedValues)) {
    if (
      Math.abs(sum1 + value - targetSum) <= Math.abs(sum2 + value - targetSum)
    ) {
      group1.push(key);
      sum1 += value;
    } else {
      group2.push(key);
      sum2 += value;
    }
  }

  return [group1, group2];
}

//Function to return output//

function solveProblem() {
  //create variable to hold converted obj
  let inputValues = convertObj(strInput, intInput);

  //create variable for sorted obj based on ascending values, "removed this part for the case of adding letter D with a value of 1 to the object"
  // let sortedValues = Object.fromEntries(
  //   Object.entries(inputValues).sort((a, b) => a[1] - b[1])
  // );

  //call function findTargetSum
  let targetSum = findTargetSum(intInput);

  //call function groupKeys
  let groupedKeys = groupKeys(inputValues, targetSum);

  return groupedKeys;
}

// console.log(convertObj(strInput, intInput));
console.log(solveProblem());

// 9 Dec 2022

// create missing array from this array, 
// & from that array FIND this [target] position number...

const array = [2, 4, 6, 8, 10, 12];
const target = 5;


var findKthPositive = (array, target) => {

    let missingArray = [];
    let missingNumber = 0;
    // let indexPosition = 0;

    while (missingArray.length < target) {

        missingNumber++;

        !array.includes(missingNumber) && missingArray.push(missingNumber)

        // array[indexPosition] === missingNumber
        //     ? indexPosition++
        //     : missingArray.push(missingNumber)
    }

    return { missingArray, findingTarget: missingArray[target - 1] }
};

const result = findKthPositive(array, target);
console.log(result);
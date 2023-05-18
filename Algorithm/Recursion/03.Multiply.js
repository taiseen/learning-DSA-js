// 19 - May - 2023

const multiplier = (numArray = []) => {

    const lastNumber = numArray.length - 1;
    const lastNumberRemove = numArray.slice(0, lastNumber);

    return numArray.length <= 0
        ? 1
        : numArray[lastNumber] * multiplier(lastNumberRemove);
}

const numArray = [1, 2, 3, 4, 5];

console.log(multiplier(numArray));

// [ 1, 2, 3, 4, 5 ]
// [ 1, 2, 3, 4 ]
// [ 1, 2, 3 ]
// [ 1, 2 ]
// [ 1 ]
// []
// 120
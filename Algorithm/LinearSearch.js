// 21 Nov 2022

const searchValue = 60;
const arrayDataSet = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const linearSearching = (array, value) => {

    // array.forEach((data, index) => {
    //     if (data === value) {
    //         return `Data found at ${index} index position`;
    //     }
    // });

    const lengthOfArray = array.length

    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i] === value) {
            return `Data found at ${i} index position...`;
        }
    }

    return `Sorry! this searching value not found...`;
}

// function call with parameter +  return value store in this 'result' variable 
const result = linearSearching(arrayDataSet, searchValue);

console.log(result);
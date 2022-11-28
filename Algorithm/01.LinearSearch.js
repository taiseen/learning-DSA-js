// 21 Nov 2022

const searchValue = 60;
const arrayDataSet = [10, 30, 50, 70, 90, 20, 40, 60, 80];

const linearSearch = (array, data) => {

    // array.forEach((value, index) => {
    //     if (value === data) {
    //         return `Data found at ${index} index position`;
    //     }
    // });

    const lengthOfArray = array.length

    for (let i = 0; i < lengthOfArray; i++) {
        if (array[i] === data) {
            return `Data found at ${i} index position...`;
        }
    }

    return 'Sorry! given searching data not found...';
}

// function call with parameter +  return value store in this 'result' variable 
const result = linearSearch(arrayDataSet, searchValue);

console.log(result);
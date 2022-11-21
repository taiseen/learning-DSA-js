// 21 Nov 2022

const searchValue = 50;
const arrayDataSet = [10, 20, 30, 40, 50, 60, 70, 80, 90];

const binarySearch = (array, data) => {

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (array[mid] === data) {
            return `Data found at ${mid} index position`;
        } else if (array[mid] < data) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return 'Sorry! given searching data not found...';
}

// function call with parameter +  return value store in this 'result' variable 
const result = binarySearch(arrayDataSet, searchValue);

console.log(result);
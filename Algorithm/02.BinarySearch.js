// 21 Nov 2022

const searchValue = 50;
const arrayDataSet = [10, 20, 30, 40, 50, 60, 70, 80, 90, 200, 700];

// binary search have a pre condition... 
// & that is given dataSet must be sorted... 
// so between this dataSet gap can be allowed... 
// but must be at ascending or descending order...

// binary search === split dataSet into 2 part... & goes on...

const binarySearch = (array, data) => {

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {

        // use it as array[index] number...
        let mid = Math.floor((start + end) / 2);

        // for decision making use ==> if/else...
        if (array[mid] === data) {
            // main data found here...
            return `Data found at ${mid} index position`;
        } else if (array[mid] < data) {
            // helper condition...
            // update start position
            start = mid + 1;
        } else {
            // helper condition...
            // update end position
            end = mid - 1;
        }
    }

    return 'Sorry! given searching data not found...';
}

// function call with parameter +  return value store in this 'result' variable 
const result = binarySearch(arrayDataSet, searchValue);

console.log(result);
// 26 Nov 2022

const searchValue = 220;
const arrayDataSet = [700, 200, 90, 80, 70, 60, 50, 40, 30, 20, 10];

// binary search have a pre condition... 
// & that is given dataSet must be sorted... 
// so between this dataSet gap can be allowed... 
// but must be at ascending or descending order...

// binary search === split dataSet into 2 part... & goes on...

const order_agnostic_binary_search = (array, data) => {

    let asc;
    let start = 0;
    let end = array.length - 1;

    // this descending making is very important...
    // is array : ascending or descending?
    array[start] < array[end]
        ? asc = true
        : asc = false

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (array[mid] === data) {
            return `Data found at ${mid} index position`;
        }


        asc                         // for ordering...
            ? array[mid] < data     // if ascending...
                ? start = mid + 1
                : end = mid - 1
            : array[mid] > data     // if descending...
                ? start = mid + 1
                : end = mid - 1
    }

    return 'Sorry! given searching data not found...';
}

// function call with parameter +  return value store in this 'result' variable 
const result = order_agnostic_binary_search(arrayDataSet, searchValue);

console.log(result);
// 29 Nov 2022

const searchValue = 700;
const arrayDataSet = [10, 20, 30, 40, 50, 60, 70, 80, 90, 200, 700];


const floorCellingBS = (array, searchingData) => {

    let asc;
    let start = 0;
    let end = array.length - 1;

    array[start] < array[end]
        ? asc = true
        : asc = false

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);


        if (array[mid] === searchingData) {
            return outputResult(array, mid);
        }

        asc
            ? array[mid] < searchingData     // if ascending...
                ? start = mid + 1
                : end = mid - 1
            : array[mid] < searchingData     // if descending...
                ? end = mid - 1
                : start = mid + 1
    }

    return 'No data found...'
}

const outputResult = (array, mid) => {

    if (array[mid - 1] === undefined) {
        return `Flooring value NOT EXIST & Celling value ${array[mid + 1]}`
    }
    else if (array[mid + 1] === undefined) {
        return `Flooring value ${array[mid - 1]} & Celling value NOT EXIST`
    }
    else {
        return `Flooring value ${array[mid - 1]} & Celling value ${array[mid + 1]}`
    }
}


// function call with parameter +  return value store in this 'result' variable 
const result = floorCellingBS(arrayDataSet, searchValue);

console.log(result);
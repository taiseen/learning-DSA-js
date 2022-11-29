// 29 Nov 2022

const searchValue = 8;
const arrayDataSet = [1, 2, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 7, 8, 8, 9];
// must need to be sorted array...


const floorCellingBS = (array, data) => {

    let start = 0;
    let end = array.length - 1;

    while (start <= end) {

        let count = 0;

        // calculate mid [index] point
        let mid = Math.floor((start + end) / 2);

        if (array[mid] === data) {

            count++

            // right side of the array from mind [index] point
            for (let i = mid - 1; i >= 0; i--) {
                array[i] === data && count++;
            }

            // right side of the array from mind [index] point
            for (let i = mid + 1; i < array.length; i++) {
                array[i] === data && count++;
            }

            if (count > 1) {
                return `This value found ${count} times...`;
            } else {
                return `This value present only ${count} time...`;
            }

            // count > 1
            //     ? `This value found ${count} times...`
            //     : `This value present only ${count} time...`

        }
        // updating the [star] & [end] index to control while loop...
        else if (array[mid] < data) {
            start = mid + 1
        } else {
            end = mid - 1
        }
    }

    return 'Have not any duplicate value'
}

// function call with parameter +  return value store in this 'result' variable 
const result = floorCellingBS(arrayDataSet, searchValue);

console.log(result);
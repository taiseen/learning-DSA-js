// 19 - May - 2023


// Solution --> 1
const rangeOfNumbers = (start, end) => {

    if (end < start) {
        return [];
    } else {
        const numbers = rangeOfNumbers(start, end - 1);
        numbers.push(end);
        return numbers
    }
}


// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨
// 🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨🟨


// Solution --> 2
const rangeOfNumbersT = (start, end) => {

    return end < start
        ? []
        : [...rangeOfNumbersT(start, end - 1), end];
};


console.log(rangeOfNumbers(1, 5));
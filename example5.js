function findSecondSmallestNumber(arr) {
    arr.sort((a, b) => a - b);
    return arr[1]; 
}
const numbers = [5, 4, 9, 3, 5, 6];
const secondSmallestNumber = findSecondSmallestNumber(numbers);
console.log("Second smallest number:", secondSmallestNumber); 

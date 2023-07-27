function positiveNumber(arr){
let sum=0
for(i=0; i<arr.length; i++){
    if (arr[i]>0){
        sum=sum+arr[i]
    }
}
   return sum;
}

const arry=[2,-5,6,-9,7]
const result=positiveNumber(arry)
console.log(result)
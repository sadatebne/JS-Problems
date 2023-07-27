function Reverse(val) {
    let reverseOrder = "";
    for (let i = val.length - 1; i >= 0; i--) {
      reverseOrder += val[i];
    }
    console.log(reverseOrder);
    return reverseOrder;
  }
  
  const val = "hello world";
  const result = Reverse(val);
  

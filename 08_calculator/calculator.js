const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;

  // const sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // console.log(sum);
};



const multiply = function(arr) {
  // let res = 1;
  // for (let i = 0; i < arr.length; i++) {
  //   res = res* arr[i];
  // }
  // return res;

  const res =arr.reduce((accumulator, curVal) => accumulator * curVal);
  return res;
  console.log(res);

};

const power = function(a, b) {
//   let res = 1;
//   for(let i =1; i <=b; i++){
//     res = res*a;
//   }
//   return res;
	
  return Math.pow(a, b);
};

const factorial = function(a) {
  let res = 1;
  for(let i =0; a >0; i++){
    res = res*a;
    a--;
  }
  return res;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

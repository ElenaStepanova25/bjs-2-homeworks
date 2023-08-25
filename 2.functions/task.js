function getArrayParams(...arr) {
  let min = Infinity;
  let max = - Infinity;
  let sum;
  let avg;
  max = Math.max(...arr);
  min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    avg = sum / arr.length;
    avg = avg.toFixed(2);
    avg = Number(avg);
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);   
  }
    return sum;
}

function differenceMaxMinWorker(...arr) {
  let difference = 0;
  max = Math.max(...arr);
  min = Math.min(...arr);
  for (let i = 0; i < arr.length; i++) {
    difference = max - min;   
  }
  return difference;
}

function differenceEvenOddWorker(...arr) {
  let difference = 0;
  let sumEvenElement = 0; 
  let sumOddElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
      sumEvenElement += arr[i]; 
    } else {
      sumOddElement += arr[i];
    }
  }
  difference = sumOddElement - sumEvenElement;
  return difference;
}

function averageEvenElementsWorker(...arr) {
  let average = 0;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i]; 
      countEvenElement ++;   
    }
    average = sumEvenElement / countEvenElement;
  }
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;
}

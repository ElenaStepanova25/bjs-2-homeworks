function getArrayParams(...arr) {
  let min = Infinity;
  let max = - Infinity;
  let sum;
  let avg;
  max = Math.max(...arr);
  min = Math.min(...arr);
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  avg = sum / arr.length;
  avg = avg.toFixed(2);
  avg = Number(avg);
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  let sum = 0;
  sum = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);   
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
  let average;
  let sumEvenElement = 0;
  let countEvenElement = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
    sumEvenElement += arr[i]; 
    countEvenElement ++;   
    } 
  }
  if (arr.length === 0) {
      average = 0;
  } else {
      average = sumEvenElement / countEvenElement;
  }
  return average;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = - Infinity;
  for (let i = 0; i < arrOfArr.length; i++) {
    const resultFunc = func(...arrOfArr[i]);
    if (maxWorkerResult < resultFunc) {
      maxWorkerResult = resultFunc;
    }
  }
  return maxWorkerResult;
}

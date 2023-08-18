"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let D = (b ** 2 - 4 * a * c);
  
  if (D < 0) { 
    arr; 
  } else if (D === 0) { 
    arr = [- b / (2 * a)]; 
  } else if (D > 0) { 
    arr = [
       (-b + Math.sqrt(D)) / (2 * a),
       (-b - Math.sqrt(D)) / (2 * a),
    ]
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let P = parseFloat(percent / 100 / 12);
  let S = parseFloat(amount - contribution);
  let pay = S * (P + (P / (((1 + P) ** countMonths) - 1)));
  let totalAmount = parseFloat((pay * countMonths).toFixed(2));
  return totalAmount;
}
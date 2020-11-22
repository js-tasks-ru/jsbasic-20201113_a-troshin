/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */

let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
}

console.log(sumSalary(salaries));

function sumSalary(salaries) {
	let sum = 0;
  	
  	for(let i in salaries) {
  		let val = salaries[i];
  		if(isNumeric(val)) {
  			sum += val;
  		}
  	}

  	return sum;
}

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}
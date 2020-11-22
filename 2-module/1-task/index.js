/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
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

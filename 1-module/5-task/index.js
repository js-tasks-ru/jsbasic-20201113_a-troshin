/**
 * truncate
 * @param {string} str
 * @param {number} maxlength
 * @returns {string}
 */
let truncatePlusThreeDot = (str, maxlength) => str.slice(0, maxlength - 1) + '…';

function truncate(str, maxlength) {
  return str.length < maxlength ? str : truncatePlusThreeDot(str, maxlength);
}


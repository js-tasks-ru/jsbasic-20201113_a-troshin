/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let strToLowerCase = str.toLowerCase();

  return strToLowerCase.indexOf('1xbet') !== -1 || strToLowerCase.indexOf('xxx') !== -1 ? true : false;
}

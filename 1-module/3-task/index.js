/**
 * ucFirst
 * @param {string} str
 * @returns {string}
 */
function ucFirst(str) {
  if(str.length === 0) return str;
  if(str.length === 1) return str.toUpperCase();

  let strToUpperCase = '';
  let strArr = str.split(' ');

  strArr.forEach((i) => strToUpperCase += i[0].toUpperCase() + i.slice(1));

  return strToUpperCase;
}

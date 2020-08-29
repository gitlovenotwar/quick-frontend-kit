// put commas into number greater than 999
export function dgs(number, precision, delimiter) {
  number = parseFloat(number) || 0;

  if(typeof precision === 'number') {
    return String(Number(number.toFixed(number === 0 ? 0 : precision))).replace(/\B(?=(\d{3})+(?!\d))/g, typeof delimiter === 'string' ? delimiter : ',');

  } else {
    return String(number).replace(/\B(?=(\d{3})+(?!\d))/g, typeof delimiter === 'string' ? delimiter : ',');
  }
}

export function stripToFormatterWord(str) {
  return (str || '').replace(/[_-]+/, ' ');
}

// To title case the string, Uppercases the first letter in each word
export function toTitleCase(str) {
  return String(str || '').replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export function toTitleCaseFirst(str) {
  str = String(str || '');
  str = str.charAt(0).toUpperCase() + str.slice(1);
  return str;
}

// converts dashed words to Pascal Case
// to upper case match words and replace all dash and underscore
export function toPascalCase(str) {
  return toTitleCase(str || '').replace(/[\-\_][a-zA-Z0-9]{1}/gi, (txt) => {
    return txt.toUpperCase(txt).replace(/\-|\_/g, '');
  });
}

// converts dashed words to Camelcase
export function toCamelCase(str) {
  str = toPascalCase(str || '');
  return str.charAt(0).toLowerCase() + str.substring(1);
}

const si = [
  { value: 1, symbol: "" },
  { value: 1E3, symbol: "k" },
  { value: 1E6, symbol: "M" },
  { value: 1E9, symbol: "G" },
  { value: 1E12, symbol: "T" },
  { value: 1E15, symbol: "P" },
  { value: 1E18, symbol: "E" }
];
export function numberFormatter(num, digits) {
  let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let i;
  for (i = si.length - 1; i > 0; i--) {
    if (num >= si[i].value) {
      break;
    }
  }
  return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
}

export function escapeRegExp(string = '') {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); // $& means the whole matched string
}

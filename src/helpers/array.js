export function removeFromArray(array = [], needle, key) {
  let index = array.findIndex(item => {
    if(item === needle) {
      return true;
    } else if(typeof item === 'object') {
      return item[key] === needle;
    }
    return false;
  });
  if(index > -1) {
    array = [...array];
    array.splice(index, 1);
  }
  return array;
}

export function sortBy(items = [], key, toUpperCase, order = 'asc', type) {
  order = order.toUpperCase() === 'ASC' ? 'ASC' : 'DESC';
  return items
    .sort((a, b) => {
      let aValue = a;
      let bValue = b;
      if (typeof aValue === 'object') {
        const aV = aValue[ key ];
        const bV = bValue[ key ];
        aValue = typeof aV === 'string' && toUpperCase ? aV.toUpperCase() : aV;
        bValue = typeof bV === 'string' && toUpperCase ? bV.toUpperCase() : bV;
      } else {
        aValue = typeof aValue === 'string' && toUpperCase ? aValue.toUpperCase() : aValue;
        bValue = typeof bValue === 'string' && toUpperCase ? bValue.toUpperCase() : bValue;
      }
      if (type === 'date_string' || type === 'date') {
        aValue = new Date(aValue).getTime();
        bValue = new Date(bValue).getTime();
      }
      else if (type === 'number') {
        const nValueA = Number(aValue);
        const nValueB = Number(bValue);
        aValue = isNaN(nValueA) ? aValue : nValueA;
        bValue = isNaN(nValueB) ? bValue : nValueB;
      }
      if (order === 'ASC') {
        if (aValue > bValue) {
          return 1;
        }
        if (aValue < bValue) {
          return -1;
        }
        return 0;
      }
      if (aValue > bValue) {
        return -1;
      }
      if (aValue < bValue) {
        return 1;
      }
      return 0;
    })
    .slice(0);
};

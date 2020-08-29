import qs from 'qs';

export function getDataFromURL(search = '', options) {
  const index = search.indexOf('?');
  search = search.slice(index);
  search = search.replace('?', '');
  return qs.parse(search, options);
}

export function getUrlFromData(path = '', data) {
  const str = qs.stringify(data);
  return `${path}${str ? '?' : ''}${str}`;
}

export function getParamsFromMatch(match) {
  return match.params || {};
}

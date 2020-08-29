import moment from 'moment';

export function requestValidator(params) {
  const newParams = {};
  Object.keys(params).map((key) => {
    if(moment.isMoment(params[key]) || moment.isDate(params[key])) {
      newParams[key] = moment(params[key]).format();
    } else {
      newParams[key] = params[key];
    }
  });
  return newParams;
}

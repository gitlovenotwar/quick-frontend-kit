import { toTitleCaseFirst } from "./string-formatter";

export function parseErrorToMessage(e) {
  return typeof e === 'object' ? e.message : typeof e === 'string' ? e : 'Unknown Error';
}

export function extractErrorData(errorData) {
  const rootData = {};
  let messages = [];
  let fields = [];
  const extractError = (object, data = {}) => {
    Object.keys(object).map((key) => {
      const value = object[key];
      if(Array.isArray(value)) {
        data[key] = [...new Set(value)].join('. ').replace(/\.+/g, '.');
      } else if(typeof value === 'object') {
        data[key] = {};
        extractError(value, data[key]);
      } else if(typeof value === 'string') {
        data[key] = value;
      }
    });
  };
  const extractMessage = (data) => {
    Object.keys(data).map((key) => {
      const value = data[key];
      if(typeof value === 'string') {
        if(value === 'This field may not be blank.') {
          fields.push(key);
        } else {
          messages.push(value);
        }
      } else if(typeof value === 'object') {
        extractMessage(value);
      }
    });
  };
  extractError(errorData, rootData);
  extractMessage(rootData);
  if(fields.length) {
    messages.push(fields.length > 1 ? `These fields may not be blank.` : 'This field may not be blank.');
  }
  return {
    data: rootData,
    messages: [...new Set(messages)].map(s => toTitleCaseFirst(s)).join(' ').trim(),
  };
}

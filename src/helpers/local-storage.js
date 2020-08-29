
export function setSessionStorage(name, value, promise = true) {
  const handler = (resolve) => {
    sessionStorage.setItem(name, JSON.stringify(value));
    resolve();
  };
  return promise ? new Promise(handler) : handler(data => data);
}

export function getSessionStorage(name, promise = true) {
  const handler = (resolve) => {
    const value = sessionStorage.getItem(name);
    const data = JSON.parse(value || null);
    return promise ? resolve(data) : data;
  };
  return promise ? new Promise(handler) : handler(data => data);
}

export function setLocalStorage(name, value, promise = true) {
  const handler = (resolve) => {
    localStorage.setItem(name, JSON.stringify(value));
    resolve();
  };
  return promise ? new Promise(handler) : handler(data => data);
}

export function getLocalStorage(name, promise = true) {
  const handler = (resolve) => {
    const value = localStorage.getItem(name);
    const data = JSON.parse(value || null);
    return promise ? resolve(data) : data;
  };
  return promise ? new Promise(handler) : handler(data => data);
}

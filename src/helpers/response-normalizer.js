/**
 * THIS FILE HAS ALL THE HELPER FUNCTION TO FLAT THE RESPONSE TO BETTER SUIT REDUX FLOW
 */

export function responseToFlat(response, key = 'id', useIndexAsKey = false, idType = 'number') {
  let ids = [];
  let data = {};
  if(Array.isArray(response)) {
    response.map((entry, index) => {
      if(typeof entry === 'object') {
        ids.push(useIndexAsKey ? index : entry[key]);
        data[useIndexAsKey ? index : entry[key]] = entry;
      } else if(typeof entry === 'string' || typeof entry === 'number') {
        ids.push(useIndexAsKey ? index : entry);
        data[useIndexAsKey ? index : entry] = entry;
      }
    });
  }
  ids = ids.map((id) => {
    return idType === 'number' ? +id : idType === 'string' ? `${id}` : id;
  });
  ids.forEach((id) => {
    data[id].id = idType === 'number' ? +id : idType === 'string' ? `${id}` : id;
  });
  return {
    ids,
    data,
  };
}

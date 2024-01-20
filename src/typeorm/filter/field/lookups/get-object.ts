export function getObject(prop, value) {
  let propParts = prop.split('.');
  let obj = {};
  let objCurrent = obj;
  for (let i = 0; i < propParts.length - 1; i++) {
    let propPart = propParts[i];
    objCurrent[propPart] = {};
    objCurrent = objCurrent[propPart];
  }
  objCurrent[propParts[propParts.length - 1]] = value;
  return obj;
}
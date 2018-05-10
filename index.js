// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function(driverName){return driverName.toLowerCase() });
}

function splitName(names) {
  return names.map(function(name) {
    return name.split(" ");
  })
}

const splitNames = splitName(drivers);

function nameToAttributes(splitNames) {
  const driversObjects = [];
  splitNames.map(function(splitName) {
    const newObj = {};
    newObj.firstName = splitName[0];
    newObj.lastName = splitName[1];
    return driversObjects.push(newObj);
  })
  return driversObjects;
}

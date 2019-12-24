
function findMatching(drivers, name) {
  return drivers.filter(driver => {
    return (driver.toLowerCase() === name.toLowerCase())
  })
}

function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => {
    return (`${driver[0]}${driver[1]}` === letters)
  })
}

function matchName(drivers, string) {
  return drivers.filter(driver => {
    return driver.name === string;
  })
}
// Code your solution here

function findMatching (drivers, name) {
  return drivers.filter(driver => {
    return driver.toLowerCase() === name.toLowerCase()
  })
}

function fuzzyMatch (drivers, letters) {
  return drivers.filter(driver => {
    return driver.slice(0, letters.length) === letters
  })
}

function matchName (drivers, nameArg) {
  return drivers.filter(driver => {
    return driver.name === nameArg
  })
}

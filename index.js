// Code your solution here


const findMatching = (drivers, string) => drivers.filter(driver => driver.toUpperCase() === string.toUpperCase());

const fuzzyMatch = (drivers, string) => drivers.filter(driver => driver.slice(0, string.length) === string);

const matchName = (drivers, string) => drivers.filter(({name}) => name === string);

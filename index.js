// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


let findMatching = (drivers, name) => {
   let newDrivers = drivers.filter(function(driver){
      return driver.toLowerCase() === name.toLowerCase();
   });
   return newDrivers
};

let fuzzyMatch = (drivers, letters) => {
   return drivers.filter(driver => driver.slice(0, letters.length) === letters)
};

let matchName = (drivers, name) => {
   return drivers.filter(driver => driver.name === 'Bobby');
};

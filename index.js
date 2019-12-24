// Code your solution here

function findMatching(drivers, name){
    let matchedNames = drivers.filter(s => {
        return s.toUpperCase() === name.toUpperCase()
    })
    return matchedNames
}

function fuzzyMatch(drivers, name){
    let matchedChars = drivers.filter(s => {
        return s.charAt(0) == name.charAt(0) && s.charAt(1) == name.charAt(1);
    })
    return matchedChars
}

function matchName(drivers, name){
    let matchedNames = drivers.filter(s => {
        return s.name === name;
    })
    return matchedNames
}
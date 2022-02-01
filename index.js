// Code your solution in this file!
const returnFirstTwoDrivers = (function(multipleDrivers) {
    return multipleDrivers.slice(0,2)
})

const returnLastTwoDrivers = (function(multipleDrivers) {
    return multipleDrivers.slice(-2)
})

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(impact) {
    return function result(amount) {
        return impact * amount
    }
}

const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(arrayOfDrivers,drivers) {
    if (drivers === returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0,2)
    }
    else if (drivers === returnLastTwoDrivers) {
        return arrayOfDrivers.slice(-2)
    }
}

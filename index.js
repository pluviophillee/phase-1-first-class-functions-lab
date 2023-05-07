// Code your solution in this file!
const drivers = ['Ali', 'Veli', 'Mehmet', 'Hakan'];

const returnFirstTwoDrivers = function (drivers){
    return drivers.slice(0,2);
}

// Code your solution in this file!
const returnLastTwoDrivers = function (drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (fare){
    return function(value){
        return fare * value;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers,func){
    return func(drivers);
}
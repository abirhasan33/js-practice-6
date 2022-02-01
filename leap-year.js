function leapYear(year){
    if(year % 4 === 0){
        return true;
    }
    return false
}
const year = 2021;
const isLeapYear = leapYear(year);
console.log('ata lipi year -', isLeapYear);
//your JS code here. If required.
function daysOfYear(year){
	if((year % 4 === 0 && year % 100 !== 0) || year % 400 ===0){
		return 366;
	}
	return 365;
}
console.log(daysOfYear(2022));
console.log(daysOfYear(2024));
console.log(daysOfYear(1900));
console.log(daysOfYear(2000));

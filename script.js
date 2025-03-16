var dateDiffInDays = function (date1, date2) {
  //   write your code 
	const d1 = new Date(date1);
	const d2= new Date(date2);
	let diffInTime= d2 - d1;
	let days=diffInTime/(1000*60*60*24);
						return days;
)
console.log(dateDiffInDays("2022-03-01", "2022-03-15")); // 14
        console.log(dateDiffInDays("2022-03-01", "2022-03-01")); // 0
        console.log(dateDiffInDays("2022-03-15", "2022-03-01")); // -14

};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

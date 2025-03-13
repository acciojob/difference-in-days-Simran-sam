var dateDiffInDays = function (date1, date2) {
  //   write your code here
	let diffInTime= date2.getTime() - date1.getTime();
	let days=Math.round(diffInTime/(1000*60*60*24);
						return days;
)};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

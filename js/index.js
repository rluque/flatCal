(function () {
	var date = new Date(),
	weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	document.getElementById('day').innerHTML = weekday[date.getDay()];
	document.getElementById('number').innerHTML = date.getDate();
}) ();
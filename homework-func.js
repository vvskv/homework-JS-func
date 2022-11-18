function func1(n) {
	return n*n;
}
function func2(a, b) {
	return a+b;
}
function func3(a, b, c) {
	return (a - b)/c;
}
function func4(n) {
	let arrDays = ["понедельник", "вторник", "среда", "четверг","пятница", "суббота", "воскресенье"];
	if(n>0 && n<8) {
		return arrDays[n-1];
	} else {
		return "неправильное число";
	}
}
function func5(a, b) {
	return a===b;
}
function func6(a, b) {
	return (a+b)>10;
}
function func7(a) {
	return a<0;
}
function func8(a) {
	return a>0 && a<10;
}
function func9(a) {
	let result = [];
	for (var i = 0; i < a.length; i++) {
		if (func8(a[i])) {
			result.push(a[i]);
		}
	}
	return result;
}

function func10(a) {
	let arr = a.toString().split("");
	let result = 0;
	arr.forEach(function(entry) {
		result = result + + entry;
	})
	return result;
}
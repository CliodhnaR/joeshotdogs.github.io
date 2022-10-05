// associative array
const items = [];
items["hot dogs"] = 0;
items["french fries"] = 0;
items["sodas"] = 0;

for(i in items){
	items[i] = prompt("How many " + i + " would you like?");
	items[i] = parseInt(items[i]);
	// if what was entered is not an integer
	while (!(Number.isInteger(items[i]))){
		alert("Sorry, please enter an integer!");
		items[i] = prompt("How many " + i + " would you like?");
		items[i] = parseInt(items[i]);
	}
}

let hdogs = items["hot dogs"];
let fries = items["french fries"];
let sodas = items["sodas"];

document.getElementById("orders").innerHTML = "Hot dogs: " + hdogs + "<br />" + " French fries: " + fries + "<br />" + " Sodas: " + sodas;

let subtotal = hdogs*4.25 + fries*2.60 + sodas*1.50;

document.getElementById("subtotal").innerHTML = "Subtotal: $" + addZero(round(subtotal));

let discount = 0;

if(subtotal >= 20) {
	discount = subtotal * 0.10;
	subtotal -= discount;
	document.getElementById("discount").innerHTML = "Discount: $" + addZero(round(discount));
}


let tax = subtotal * 0.0625;
subtotal += tax;

document.getElementById("tax").innerHTML = "Tax: $" + addZero(round(tax));

document.getElementById("total").innerHTML = "Final total: $" + addZero(round(subtotal));

function round(num){
	num = num * 100;
	num = Math.round(num);
	num = num/100;
	return num;
}

function addZero(num){
	tempNum = (num*100)%10
	if(tempNum < 1) {
		num = num + "0";
	}
	return num;
}

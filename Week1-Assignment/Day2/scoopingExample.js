// Write a JavaScript program to observe how the same variable name behaves:
// * in *global scope*,
// * inside a *function*, and
// * inside an *if-block* using both var and let.
let genderType = "female";

function printGender() {
	let color = "brown";

	if (genderType.startsWith("Female")) {
		var age = 30;
		let color = "Pink";
		console.log("Color inside if-block:", color);
	} else {
		var age = 35;
		console.log("Color inside else-block:", color);
	}

	console.log("Age outside if-block:", age);
	console.log("Color outside if-block:", color);
}

printGender();
console.log("Global genderType:", genderType);

genderType = "Male";
printGender();
console.log("Global genderType:", genderType);

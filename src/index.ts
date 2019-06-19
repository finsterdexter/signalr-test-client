function main() {
	let place = "World";
	let h1 = document.createElement("h1");
	h1.innerHTML = hello(place);
	document.body.appendChild(h1);
}

function hello(place: string) {
	return "Hello, " + place;
}

main();
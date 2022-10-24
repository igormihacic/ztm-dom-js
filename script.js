const button = document.getElementById("enter");
const input = document.getElementById("userinput");
const ul = document.querySelector("ul");
let li = document.querySelectorAll("li");

if (li.length > 0) {
	li.forEach((item, index) => {
		item.addEventListener("click", (e) => {
			item.classList.toggle("done");
		});
	});
}

function inputLength() {
	return input.value.length;
}

function createListElement() {
	// create li element
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);

	// add listener to newly created li element
	li.addEventListener("click", (e) => {
		li.classList.toggle("done");
	});

	// create span element for li deletion
	const mySpan = document.createElement("span");
	mySpan.innerHTML = "X";
	li.appendChild(mySpan);

	// create listener for span delete action
	mySpan.addEventListener("click", (e) => {
		ul.removeChild(li);
	});

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

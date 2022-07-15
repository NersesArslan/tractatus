const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const inpt = document.querySelector('input');
btn.addEventListener('click', () => {
	const li = document.createElement("li");
	li.appendChild(document.createTextNode(inpt.value));
	ul.appendChild(li);
})
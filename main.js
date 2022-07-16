const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const inpt = document.querySelector('input');
btn.addEventListener('click', () => {
	const p = document.createElement("p");
	p.appendChild(document.createTextNode(inpt.value));
	ul.appendChild(p);
	inpt.value ="";
	p.addEventListener('click', () => {
		p.style.textDecoration = "line-through";
	})
	p.addEventListener('dblclick', () => {
		ul.removeChild(p);
	})
})

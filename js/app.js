const counter = document.getElementById('counter');
const add = document.querySelector('.nextBtn');
const lower = document.querySelector('.prevBtn');
let count = 0;

add.addEventListener('click', function increase() {
	count += 1;
	console.log(count);
	sumUp();
});

lower.addEventListener('click', function decrease() {
	count -= 1;
	console.log(count);
	sumUp();
});

function sumUp() {
	if (count === 0) {
		counter.style.color = 'black';
	} else if (count > 0) {
		counter.style.color = 'green';
	} else if (count < 0) {
		counter.style.color = 'red';
	}
	counter.innerHTML = count;
}

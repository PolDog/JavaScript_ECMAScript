function createCounter() {
	let count = 0;
	return {
		increment: function () {
			return (count += 1);
		},
		decrement: function () {
			return (count -= 1);
		},
		getValue: function () {
			return count;
		},
	};
};

const count=createCounter();
console.log(count.getValue());
console.log(count.increment());
console.log(count.increment());
console.log(count.decrement());
console.log(count.getValue());


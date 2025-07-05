class Product {
	constructor(name, price) {
		this.name = name;
		this.price = price;
	}
}
class Order {
	constructor(orderNumber) {
		this.products = [];
		this.orderNumber = orderNumber;
		this.totalPrice = 0;
	}
	addProduct(product) {
		this.products.push(product);
		this.totalPrice += product.price;
	}
	getTotalPrice() {
		console.log(`total cost=${this.totalPrice}`);
	}
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice());

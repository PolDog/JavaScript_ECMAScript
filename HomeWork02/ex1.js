class Book {
	constructor(title, author, pages) {
		this.title = title;
		this.pages = pages;
		this.author = author;
	}
	displayInfo = () => {
		console.log(`Название: ${this.title}, Автор: ${this.author}, Страниц: ${this.pages}.`);
	};
}
const book = new Book("1984", "Джордж Оруэлл", 328);
book.displayInfo();

// Задание 1: "Получение данных о пользователе"

async function loadData(id) {
	await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
		.then((result) => {
			if (result.ok) {
				return result.text();
			}
			throw new Error("пользователь с указанным ID не найден");
		})
		.then((data) => {
			console.log(data);
		})
		.catch((err) => {
			console.error(err);
		});
}

loadData(1);

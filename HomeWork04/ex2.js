// Задание 2: "Отправка данных на сервер"

const userData = {
	name: "Pol",
	age: 30,
};

async function saveData(id) {
	fetch("https://jsonplaceholder.typicode.com/posts", {
		method: "POST",
		body: JSON.stringify(userData),
		headers: {
			"Content-type": "application/json; charset=UTF-8",
		},
	})
		.then((response) => {
			if (response.ok) {
				return response;
			}
			throw new Error("Save error");
		})
		.then((response) => response.json())
		.then((json) => console.log(json));
}

saveData(userData);

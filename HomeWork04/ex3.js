// Задание 3: "Изменение стиля элемента через заданное время"
function changeStyleDelayed(id, delay) {
	const titleEl = document.getElementById(id);
	if (!titleEl) return console.log("элемент не найден");
	setTimeout(function timeout() {
		titleEl.textContent = "Новый текст";
	}, delay);
}
changeStyleDelayed("title1", 2000);

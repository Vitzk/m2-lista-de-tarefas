const tasks = [
	{ title: "Comprar comida para o gato", type: "Urgente" },
	{ title: "Consertar Computador", type: "Importante" },
	{ title: "Beber água", type: "Normal" },
	{ title: "Enviar relatório trimestral", type: "Importante" },
	{ title: "Fazer exercícios físicos", type: "Normal" },
	{ title: "Agendar consulta médica", type: "Urgente" },
	{ title: "Ler pelo menos um capítulo de um livro", type: "Normal" },
	{ title: "Limpar a despensa", type: "Importante" },
	{ title: "Pagar a conta de energia", type: "Urgente" },
	{ title: "Assistir a um documentário interessante", type: "Normal" },
];

function renderElements(bd) {
	const elementTask = document.querySelector(".tasks__list");
	console.log(bd);

	bd.forEach((element) => {
		const task = createTaskItem(element.title, element.type);
		elementTask.appendChild(task);
	});
}

function createTaskItem(title, type) {
	console.log(title);
	console.log(type);

	const task = document.createElement("li");
	const containerTask = document.createElement("div");
	const typeTask = document.createElement("span");
	const titleTask = document.createElement("p");
	const buttonTask = document.createElement("button");

	titleTask.innerText = title;

	task.classList.add("task__item");
	containerTask.classList.add("task-info__container");

	typeTask.classList.add("task-type");
	console.log(typeTask);

	if (type == "Urgente") {
		typeTask.classList.add("span-urgent");
	}
	if (type == "Importante") {
		typeTask.classList.add("span-important");
	}
	if (type == "Normal") {
		typeTask.classList.add("span-normal");
	}

	buttonTask.classList.add("task__button--remove-task");

	containerTask.append(typeTask, titleTask);
	task.append(containerTask, buttonTask);

	return task;
}

renderElements(tasks);

// // script.js
// const form = document.querySelector(".form__container");
// console.log(form);

// // script.js
// form.addEventListener("submit", function (event) {
// 	event.preventDefault();

// 	const inputName = document.querySelector(".input__box--text");
// 	const selectPet = document.querySelector(".input__box--select");

// 	console.log(inputName.value);
// 	console.log(selectPet.value);
// });

// // index.js
// // Capturando o elemento button do nosso html
// const button = document.querySelector("button");
// const p = document.querySelector("p");

// let contador = 0;

// // index.js
// button.addEventListener("click", function () {
// 	contador++;
// 	p.innerHTML = contador;
// });

// const body = document.querySelector("body");

// body.addEventListener("click", function (event) {
// 	console.log("evento: ", event);
// 	console.log("current target: ", event.currentTarget);
// 	console.log("target: ", event.target);
// });

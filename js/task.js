const tasks = [
    { name: "Recoger setas en el campo", completed: true, id: 1 },
    { name: "Comprar pilas", completed: true, id: 2 },
    { name: "Poner una lavadora de blancos", completed: true, id: 3 },
    {
      name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
      completed: false,
      id: 4,
    },
];
const btn = document.querySelector('.js-btn');

for (const tasks of tasks) {
  tasks.innerHTML += `<li> ${tasks} </li>`;
  console.log(tasks);
}

renderTasks();
btn.addEventListener('click', handleClick);



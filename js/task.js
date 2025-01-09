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


//traer elementos del html
const btnAddTask = document.querySelector('.js-btn-task');
const btnSearch = document.querySelector('.js-btn-search');
const newTaskInput = document.querySelector('.js-new-task');
const searchInput = document.querySelector('.js-search');
const taskList = document.querySelector('.js-tasks');



  // pintar tareas en el html 
  for (const task of tasks) {
    taskList.innerHTML += `<li>${task.name}</li>`;
  };

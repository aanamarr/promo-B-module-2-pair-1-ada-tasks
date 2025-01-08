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
const taskList = document.querySelector ('.js-task');

//funcion para ppintar las tareas en la lista 
function renderTasks() {
  taskList.innerHTML = "";

  for ( const task of tasks){
    taskList.innerHTML +=  `<li> ${task} </li>`;
    console.log(task);
  }
};

function handleClick() {
  console.log();
};

renderTasks();
btn.addEventListener('click', handleClick);
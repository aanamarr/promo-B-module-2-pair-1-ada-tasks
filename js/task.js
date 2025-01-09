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
  // añadir checkbox , añadir id al checkbox, escuchar el evento click sobre la lista de tareas

  for (const task of tasks) {
    const checkbox = `<input type="checkbox" id="task-${task.id}" class="task-checkbox" ${task.completed ? "checked" : ""}>`;
    taskList.innerHTML += `
      <li class="${task.completed ? "completed" : ""}">
        ${checkbox}
        ${task.name}
      </li>`;
  }


  const handleClickList = (event) => {
    const taskId = parseInt(event.target.id);
    if (!taskId) return; 

  };

 
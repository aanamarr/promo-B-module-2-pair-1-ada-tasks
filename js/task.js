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
console.log(tasks);

const btnAdd = document.querySelector(".js-btn-add");
const textAdd = document.querySelector(".js-text-task-add");
const inputTextFilter = document.querySelector(".js-text-task-filter");
const btnFilter = document.querySelector(".js-btn-filter");

for (const task of tasks) {
    const taskPepino = document.createElement("li");//crea un elemento li y lo guarda en la variable taskPepino.
    taskPepino.innerHTML = task.name;//añade el contenido (los nombres que estan en el array) a la variable taskPepino.
    taskPepino.classList.add("task");//el .classList.add, añade la clase task a la variable taskPepino, eso permite añadir classes css a los <li>.
    taskPepino.setAttribute("id", task.id);
    if (task.completed) {
        taskPepino.classList.add("task--completed");
    }
    document.querySelector(".js-tasks").appendChild(taskPepino); //esta función anexa el elemento creado (li) que nombramos como taskPepino al js-tasks para que se pinte en la web.
}

//taskPepino.setAttribute("id", task.id); Este fragmento de código establece un atributo id y agrega condicionalmente una clase CSS al elemento <li> (taskPepino):

//taskPepino.setAttribute("id", task.id): establece el atributo id del elemento taskPepino en el id de la tarea actual.
//if (task.completed) { taskPepino.classList.add("task--completed"); }: verifica si la tarea está completa. Si es así, agrega la clase CSS task--completed al elemento taskPepino. Esto le permite aplicar estilos específicos a las tareas completadas.

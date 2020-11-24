// selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todos");


// event listeners
document.addEventListener("DOMContentLoaded", getTodos);
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
filterOption.addEventListener("click", filterTodo);



// functions
function addTodo(e)  {
    // prevent form from submitting
    e.preventDefault();
    // create Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // check button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // add todo storage
    saveLocalTodos(todoInput.value)
    // trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append todo-list
    todoList.appendChild(todoDiv);

    // clear todo
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    // delete todo
    if (item.classList[0] === "trash-btn") {
        const todo = item.parentElement;
        //animation
        todo.classList.add("fall");
        removeLocalTodos(todo);
         // todo.remove();
        todo.addEventListener("transitionend", function () {
             todo.remove();
        })
       
    }

    // check mark
    if (item.classList[0] === "complete-btn")    {
        const todo = item.parentElement;
        todo.classList.add("complete")
    }
} 
function filterTodo(e)   {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value)  {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("complete")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                } 
                break;  
            case "uncompleted":
                if (!todo.classList.contains("complete")) {
                     todo.style.display = "flex";
                } else {
                     todo.style.display = "none";
                }   
                break; 
        }
    });
}
// save local todos
function saveLocalTodos(todo) {
    //check if todo already exist
    let todos;
    if (localStorage.getItem("todos") === null)  {
        todos = [];
        console.log(`expect an array and got ${todos}`)
    } else {
        console.log(localStorage.getItem("todos"), 'log it')
        todos = JSON.parse(localStorage.getItem("todos"));
        console.log(`also expecting an array but got ${todos} instead`)
    }
    console.log(todos);
    console.log(todo);
      todos.push(todo);
    localStorage.setItem("todos", JSON.stringify([...todos, todo]));
}
function getTodos() {
     let todos;
    if (localStorage.getItem("todos") === null)  {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
        
    }
    
    todos.forEach(function(todo)    {
        const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // create li
    const newTodo = document.createElement("li");
    newTodo.innerText = todo;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);
    // check mark button
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);
    
    // check trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);

    // append todo-list
    todoList.appendChild(todoDiv);
    })
}
function removeLocalTodos(todo) {
    //check if todo already exist
    let todos;
    if (localStorage.getItem("todos") === null)  {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    console.log(todo.children[0].innerText);
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem("todos", JSON.stringify(todos));
}

//
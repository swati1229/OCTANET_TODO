const form = document.getElementById("form")
const input = document.getElementById("input")
const todosUL = document.getElementById("todos")

const todos = JSON.parse(localStorage.getItem("todos"))

if(todos){
    todos.forEach(todo => addTodo(todo))
}

form.addEventListener("submit",function(event){

    event.preventDefault()

    addTodo()

});

function addTodo(todo){
    let todoText = input.value

    if(todo)
    {
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement("li")

        todoEl.innerText = todoText

        todoEl.addEventListener("click",function(){
            this.classList.toggle("completed");

            updateLS()
        })

        todoEl.addEventListener("contextmenu",function(event){
            event.preventDefault()

            todoEl.remove()

            updateLS()
        })

        todosUL.appendChild(todoEl)

        input.value = ""

        updateLS()
    }
}

function updateLS(){
    todoEl = document.querySelectorAll("li")

    const todos = []

    todoEl.forEach(todoEl => {
        todos.push({
            text: todoEl.innerText,
            completed: todoEl.classList.contains("completed")
        })
    })

    localStorage.setItem("todos",JSON.stringify(todos))
} 
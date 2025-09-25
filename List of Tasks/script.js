tasks = JSON.parse(localStorage.getItem("@tasks")) || []

let listElement = document.querySelector("#app ul")
let inputElement = document.querySelector("#app input")

let addElement = document.querySelector("#app #add")

let clearElement = document.querySelector("#app #clear")
// clearElement.addEventListener('click', () => removeTasks())

function renderTasks() {  
    listElement.innerHTML = ""
    tasks.map((textTask, index) => {
        let liElement = document.createElement('li')
        let liText = document.createTextNode(textTask)
        liElement.appendChild(liText)

        let removeElement = document.createElement('button')
        let removeText = document.createTextNode('Remove')
        removeElement.appendChild(removeText)
        
        removeElement.addEventListener('click', () => removeTask(index))
  
        liElement.appendChild(removeElement)
        listElement.appendChild(liElement)

    })
}

function addTask() {
    if(inputElement.value === '' || !inputElement.value) return
    tasks.push(inputElement.value)  

    renderTasks()
    saveData()
}   

function removeTask(index) {
    tasks.splice(index, 1)
    renderTasks()
    saveData()
}

function removeTasks() {
    alert('entrou no clear')
    tasks = []
    renderTasks()
}

function saveData() {
    localStorage.setItem("@tasks", JSON.stringify(tasks))
}

renderTasks()
addElement.onclick = addTask
clearElement.onclick = removeTasks

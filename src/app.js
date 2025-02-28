const TaskManager = require("./Tasks")
let taskManager = new TaskManager()
taskManager.addTask("Estudar JS")
taskManager.addTask("Estudar Node")
taskManager.addTask("Estudar Python")
const tarefas = taskManager.getTasks()
tarefas.forEach((t,index) =>{
    console.log(`${index+1} - ${t}`)
})
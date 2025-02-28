class TaskManager{
    constructor(){
        this.tasks = []
    }

    addTask(task){
        if(!task || typeof task !== "string"){
            throw new Error("Tarefa Invalida")
        }
        this.tasks.push(task)
    }

    getTasks(){
        return this.tasks
    }

    clearTasks(){
        this.tasks = []
    }
}
module.exports = TaskManager
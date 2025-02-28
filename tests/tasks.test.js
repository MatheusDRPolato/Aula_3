const TaskManager = require("../src/Tasks")
describe("Gerenciador de tarefas",()=>{
    let taskManager    

    beforeEach(()=>{
        taskManager = new TaskManager()
    })

    test("Nova Tarefa", ()=>{
        taskManager.addTask("Estudar Jest")
        expect(taskManager.getTasks()).toContain("Estudar Jest")
    })

    test("Lista Inicia Vazia",()=>{
        expect(taskManager.getTasks()).toEqual([])
    })

    test("Limpar Lista",()=>{
        taskManager.addTask("Comprar Pão")
        taskManager.clearTasks()
        expect(taskManager.getTasks()).toEqual([])
    })

    test("Dar erro",()=>{
        expect(()=> taskManager.addTask(123)).toThrow("Tarefa Invalida")
    })
})
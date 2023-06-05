import { urlApi } from "./FirebaseConfig"

export async function listTodos() {
  let tarefas = []
  await fetch(urlApi)
    .then((response) => response.json())
    .then((data) => { 
      for(let id in data) {
        tarefas.push({key: id, ...data[id]})
      }
    })
    .catch((error) => console.log(error))
  return tarefas
}

export async function insertTodo(todo) {
  await fetch(urlApi, { 
    method: 'POST',
    body: JSON.stringify(todo), 
    headers: { 'Content-type': 'application/json' },
  })
  .catch((error) => console.log(error))
}
const url = "https://back-react-1577b-default-rtdb.firebaseio.com/todo.json"

export async function listTodos() {
  let tarefas = []
  await fetch(url)
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
  await fetch(url, { 
    body: JSON.stringify(todo), 
    headers: { 'Content-type': 'application/json' },
  })
  .catch((error) => console.log(error))
}
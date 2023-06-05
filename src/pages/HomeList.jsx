import { useEffect, useState } from "react"
import { listTodos } from "../services/FirestoreService"

export default function HomeList() {
  const [isLoading, setIsLoading] = useState(false)
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true)
      const response = await listTodos()
      setTarefas(response)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      {isLoading ?
        <h3>Aguarde...</h3>
        :
        <ol>
          {tarefas.map((tarefa, key) => <li key={key}>{tarefa.tarefa} - Prioridade {tarefa.prioridade}</li>)}
        </ol>}
    </>
  )
}
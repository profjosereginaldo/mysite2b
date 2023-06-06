import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { insertTodo } from '../services/FirestoreService'

export default function NovoForm() {
  const { register, handleSubmit } = useForm()
  const navigate = useNavigate()

  async function onSubmit(data) {
    await insertTodo(data)
    navigate("/")
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="tarefa">Tarefa</label>
        <input type="text" id="tarefa" {...register("tarefa")}/>
      </div>
      <div>
        <label htmlFor="prioridade">Prioridade</label>
        <select id="prioridade" {...register("prioridade")}>
          <option value="1">Urgente</option>
          <option value="2">Importante</option>
          <option value="3">Normal</option>
          </select>
      </div>
      <button>Salvar</button>
    </form>
  )
}
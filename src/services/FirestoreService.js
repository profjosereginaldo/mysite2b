import { getFirestore, collection, addDoc , getDocs, query, where, limit } from 'firebase/firestore'
import { app } from './FirebaseConfig'

const db = getFirestore(app)

export async function listTodos() {
    let tarefas = []
    const response = await getDocs(
        query(collection(db, "tarefas"), where("prioridade", '==', 2), limit(10))
        )
    response.forEach((doc) => {
        tarefas.push({ key: doc.id, ...doc.data() })
    })
    return tarefas
}

export async function insertTodo(todo) {
    await addDoc(collection(db, 'tarefas'), {
        tarefa: todo.tarefa,
        prioridade: +todo.prioridade
    })
}
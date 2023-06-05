import { getFirestore, collection, getDocs } from 'firebase/firestore'
import { app } from './FirebaseConfig'

const db = getFirestore(app)

export async function listTodos() {
    let tarefas = []
    const response = await getDocs(collection(db, "tarefas"))
    response.forEach((doc) => {
      tarefas.push({key: doc.id, ...doc.data()})
    })
    return tarefas
}
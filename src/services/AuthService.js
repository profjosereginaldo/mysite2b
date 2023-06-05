import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { app } from './FirebaseConfig'

const auth = getAuth(app)

export async function login(email, senha) {
  return await signInWithEmailAndPassword(auth, email, senha)
    .then((userCredential) => userCredential.user.uid)
    .catch((error) => {
      if (error.code == 'auth/user-not-found') {
        throw Error('Usuário não encontrado')
      } else if (error.code == 'auth/wrong-password') {
        throw Error('Senha inválida')
      }
    })
}

export async function logout() {
  await signOut(auth)
}

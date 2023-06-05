import { useParams } from "react-router-dom"

export default function Perfil() {
  const { id } = useParams()

  return (
    <section>
      <h1>Perfil</h1>
      <p>UserId {id}</p>
    </section>
  )
}
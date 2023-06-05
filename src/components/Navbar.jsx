import { useContext } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
import AuthContext from '../contexts/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { userId, handleLogout } = useContext(AuthContext)
  const navigate = useNavigate()

  async function handleClick() {
    await handleLogout()
    navigate("/")
  }

  return (
    <ul>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/novo">Nova Tarefa</NavLink></li>
      <li><NavLink to={`/perfil/${userId}`}>Perfil</NavLink></li>
      <button onClick={handleClick}>Sair</button>
    </ul>
  )
}
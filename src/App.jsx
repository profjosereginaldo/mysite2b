import { useContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import AuthContext from './contexts/AuthContext'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import Login from './pages/Login'
import Novo from './pages/Novo'
import Perfil from './pages/Perfil'
import './App.css'

export default function App() {
  const { logado } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Routes>
        {logado ?
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="novo" element={<Novo />} />
            <Route path="perfil/:id" element={<Perfil />} />
          </Route>
          : <Route index element={<Login />} />}
        <Route path="*" element={<Erro404 />} />
      </Routes>
    </BrowserRouter>
  )
}

import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import './Layout.css'

export default function Layout() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <p>Direitos Autorais 2023</p>
      </footer>
    </>
  )
}
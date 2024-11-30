import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="cyber-overlay z-[1]" />
      <main className="flex-grow pt-24 relative z-[2]">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
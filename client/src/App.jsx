import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AuthPage from './pages/AuthPage'
import LinkyPage from './pages/LinkPage'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <BrowserRouter>
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/linky" element={<LinkyPage />} />
            <Route path="/auth" element={<AuthPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App

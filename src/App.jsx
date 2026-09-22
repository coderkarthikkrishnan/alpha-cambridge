import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SlideProvider } from './context/SlideContext'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Home from './pages/Home'
import CambridgeExamDetails from './pages/CambridgeExamDetails'
import About from './pages/About'
import CambridgeExams from './pages/CambridgeExams'
import Services from './pages/Services'
import Contact from './pages/Contact'
import FAQ from './pages/FAQ'

export default function App() {
  return (
    <BrowserRouter>
      <SlideProvider>
        <div className="page-wrapper">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cambridge-exam-details" element={<CambridgeExamDetails />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </SlideProvider>
    </BrowserRouter>
  )
}

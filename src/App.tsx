import { Routes, Route, useLocation } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
import Servicos from './pages/Servicos'
import Blog from './pages/Blog'
import BlogPost from './pages/BlogPost'
import Contato from './pages/Contato'
import NotFound from './pages/NotFound'
import LP from './pages/LP'
import LPIA from './pages/LPIA'
import LPEbook from './pages/LPEbook'
import LPGlobal from './pages/LPGlobal'
import Obrigado from './pages/Obrigado'
import EbookObrigado from './pages/EbookObrigado'
import Links from './pages/Links'

function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function App() {
  const { pathname } = useLocation()
  if (pathname === '/lp') return <LP />
  if (pathname === '/lp-ia') return <LPIA />
  if (pathname === '/global') return <LPGlobal />
  if (pathname === '/ebook') return <LPEbook />
  if (pathname === '/obrigado') return <Obrigado />
  if (pathname === '/ebook-obrigado') return <EbookObrigado />
  if (pathname === '/links') return <Links />
  return <SiteLayout />
}

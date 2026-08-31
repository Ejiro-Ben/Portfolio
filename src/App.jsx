import { useState } from 'react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { PortfolioPage } from './components/PortfolioPage'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleViewAll = () => {
    setCurrentPage('portfolio');
  };

  const handleBack = () => {
    setCurrentPage('home');
  };

  return (
    <>
      {currentPage === 'home' ? (
        <>
          <Header />
          <Hero onViewPortfolio={handleViewAll} />
          <About />
          <Portfolio onViewAll={handleViewAll} />
          <Contact />
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <PortfolioPage onBack={handleBack} />
          <Footer />
        </>
      )}
    </>
  )
}

export default App

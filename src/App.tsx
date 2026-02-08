import Header from './components/Header'
import Hero from './components/Hero'
import Vision from './components/Vision'
import ProcessMap from './components/ProcessMap'
import BusinessPillars from './components/BusinessPillars'
import Partners from './components/Partners'
import History from './components/History'
import Company from './components/Company'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Vision />
        <ProcessMap />
        <BusinessPillars />
        <Partners />
        <History />
        <Company />
      </main>
      <Footer />
    </div>
  )
}

export default App

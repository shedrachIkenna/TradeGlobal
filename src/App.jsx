import Navbar from './components/Navbar'
import Showcase from './components/Showcase'
import Countdown from './components/Countdown'

const App = () => {
  return (
    <div className="App font-inter text-darkText max-w-screen-xl md:mx-auto">
      <Navbar />
      <Showcase />
      <Countdown />
    </div>
  )
}

export default App
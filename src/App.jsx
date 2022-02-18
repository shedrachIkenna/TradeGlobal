import Navbar from './components/Navbar'
import Showcase from './components/Showcase'

const App = () => {
  return (
    <div className="App font-inter text-darkText max-w-screen-xl md:mx-auto">
      {/* <div className="max-w-lg"> */}
        <Navbar />
        <Showcase />
      {/* </div> */}
    </div>
  )
}

export default App
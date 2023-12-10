import Footer from "./components/screens/Footer"
import Header from "./components/screens/Header"
import { Button } from "./components/ui/button"




const App = () => {
  return (
    <div>
      <Header/>
      <div className="w-full h-44 mt-10">
        <Button>
          Goderash
        </Button>
      </div>
      <Footer/>
    </div>
  )
}

export default App
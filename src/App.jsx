import Footer from "./components/Homepage/Footer"
import Header from "./components/Homepage/Header"
import Service from "./components/Homepage/Service"
import { Button } from "./components/ui/button"


const App = () => {
  return (
    <div>
      <Header/>
      <Service/>
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
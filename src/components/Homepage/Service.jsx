import { Button } from "@/components/ui/button"

const Service = () => {
  return (
    <div>
        <footer className="w-full">
          <div className="bg-[#011627] p-4 text-white text-center">
            <h3 className="text-3xl font-bold mb-4">We help save your most precious asset — time</h3>
            <p className="mb-8">
              Goderash mobile car services in the Ethiopia help you break free from the petrol station. Saving you time, by
              bringing fuel to you, anytime, anywhere. An eco-friendly mobile car wash. And engine oil, battery and tyre
              change services, all just a tap away.
            </p>
            <div className="flex justify-center space-x-4">
              <Button className="bg-transparent hover:bg-white hover:text-black">Fuel delivery</Button>
              <Button className="bg-transparent hover:bg-white hover:text-black">Car wash</Button>
              <Button className="bg-transparent hover:bg-white hover:text-black">Engine oil</Button>
              <Button className="bg-transparent hover:bg-white hover:text-black">Battery</Button>
              <Button className="bg-transparent hover:bg-white hover:text-black">Tyres</Button>
            </div>
          </div>
        </footer>
    </div>
  )
}

export default Service
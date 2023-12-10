import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <div className="relative bg-black text-white">
      <nav className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center space-x-4">
          <img
            alt="Logo"
            height="40"
            src="/placeholder.svg"
            style={{
              aspectRatio: "100/40",
              objectFit: "cover",
            }}
            width="100"
          />
          <ul className="hidden md:flex space-x-6">
            <li>
              <a className="hover:text-gray-300" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-gray-300" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center space-x-4">
          <Button className="bg-yellow-500 hover:bg-yellow-600 text-black" variant="default">
            Download Now
          </Button>
          <div className="md:hidden">
            <MenuIcon className="text-white" />
          </div>
        </div>
      </nav>
      <div className="px-6 py-20">
        <h1 className="text-5xl font-bold leading-tight mb-4">We give you the time to do the things that matter</h1>
        <p className="text-xl mb-6">Fuel delivery and time-saving vehicle services</p>
        <Button className="bg-cyan-600 hover:bg-cyan-700" variant="default">
          Lets Goderash
        </Button>
      </div>
      <div className="absolute bottom-0 inset-x-0 pb-6 px-6 bg-gradient-to-t from-black to-transparent">

      </div>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

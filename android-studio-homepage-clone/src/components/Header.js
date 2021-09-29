import { BsThreeDotsVertical } from "react-icons/bs"
import Logo from "./Logo"
import MenuButton from "../utils/MenuButton"

export default function Header() {
  return (
    <>
      <header className="fixed w-full bg-white flex items-center justify-between px-5 py-2 shadow">
        <div className="flex items-center">
          {/* Toggle menu on click */}
          <MenuButton />
          <Logo />
        </div>

        {/* Dots */}
        <div>
          {/* Move this into a separate component */}
          <button>
            <BsThreeDotsVertical />
          </button>
        </div>
      </header>
    </>
  )
}

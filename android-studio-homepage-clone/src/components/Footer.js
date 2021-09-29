import { useState } from "react"
import { developers, footer } from "../data/tools"
import google from "../images/lockup-developers.svg"

export default function Footer() {
  const [items] = useState(footer)
  const [moreItems] = useState(developers)

  return (
    <>
      <footer className="px-5 my-10 border-t border-b border-gray-300">
        <ul className="sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-5">
          {items.map((item) => (
            <div className="">
              <h4
                key={item.id}
                className="uppercase text-gray-600 tracking-wider text-sm mb-3 mt-10"
              >
                {item.title}
              </h4>
              <div>
                {item.links.map((link) => (
                  <li key={link} className="text-gray-800 my-4 text-sm">
                    {link}
                  </li>
                ))}
              </div>
            </div>
          ))}
        </ul>
      </footer>

      <aside className="px-5 mb-10 pb-10 md:flex items-center border-b border-gray-300">
        <img
          src={google}
          alt="Google developers"
          title="Google developers"
          className="w-44"
        />
        <ul className="md:flex items-center">
          {moreItems.map(({ id, title }) => (
            <li key={id} className="text-sm my-4 text-gray-800 md:my-0 md:mx-4">
              {title}
            </li>
          ))}
        </ul>
      </aside>
    </>
  )
}

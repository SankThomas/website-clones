import { useState } from "react"
import { exploreMore } from "../data/tools"

export default function Explore() {
  const [cards] = useState(exploreMore)

  return (
    <>
      <section className="py-10 2xl:max-w-7xl 2xl:mx-auto px-5">
        <h2 className="font-bold text-4xl text-gray-800 mb-5">Explore more</h2>

        <div className="explore grid grid-cols-1 gap-5 md:grid-cols-2 md:h-96 lg:grid-cols-4">
          {cards.map((card) => (
            <article key={card.id} className="p-5">
              <h3 className="font-bold text-2xl text-blue-100 tracking-wide mb-3 hover:text-white cursor-pointer">
                {card.title}
              </h3>
              <p className="text-white">{card.desc}</p>
              {/* Images are missing here - add them later */}
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

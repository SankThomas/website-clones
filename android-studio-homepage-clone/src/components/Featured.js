import { useState } from "react"
import { featured } from "../data/featured"

export default function Featured() {
  const [cards] = useState(featured)

  return (
    <>
      <section className="featured px-5 py-10 grid grid-cols-1 gap-5 md:grid-cols-2 2xl:max-w-7xl 2xl:mx-auto">
        {cards.map((card) => (
          <article key={card.id} className="shadow p-5">
            <h4 className="uppercase tracking-widest mb-5">{card.tag}</h4>
            <h2 className="font-bold text-2xl mb-3">{card.title}</h2>
            <p className="mb-5">{card.desc}</p>
            <button>{card.button}</button>
          </article>
        ))}
      </section>
    </>
  )
}

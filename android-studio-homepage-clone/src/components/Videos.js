import { useState } from "react"
import { videos } from "../data/tools"
import eye from "../images/eye-1.svg"

export default function Videos() {
  const [cards] = useState(videos)

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="md:flex 2xl:max-w-7xl 2xl:mx-auto px-5">
          <article className="w-full mr-10">
            <img
              src={eye}
              alt="Latest news"
              title="Latest news"
              className="w-20 mb-10"
            />
            <h2 className="text-4xl text-gray-800 font-bold mb-5">
              Latest news
            </h2>
            <p className="mb-5">
              Keep up to date with what's going on in Android.
            </p>
            <button className="btn-white mb-10">View all news</button>
          </article>
          <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <article key={card.id}>
                <img src={card.image} alt={card.title} title={card.title} />
                <h4 className="uppercase tracking-widest mb-5 text-gray-600 mt-5">
                  {card.tag}
                </h4>
                <h2 className="font-bold text-gray-800 text-2xl mb-3 hover:text-blue-900 cursor-pointer transition-all duration-100">
                  {card.title}
                </h2>
                <p className="font-bold tracking-wide">{card.date}</p>
              </article>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

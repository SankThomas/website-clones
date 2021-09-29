import { useState } from "react"
import { community } from "../data/tools"

export default function Community() {
  const [cards] = useState(community)

  return (
    <>
      <section className="bg-gray-100 py-10">
        <div className="2xl:max-w-7xl 2xl:mx-auto px-5">
          <article className="w-full mr-10">
            <h2 className="text-4xl text-gray-800 font-bold mb-5">
              Visit our community
            </h2>
            <p className="mb-5">
              Keep up to date with what's going on in Android.
            </p>
            <button className="btn-white mb-10">View all news</button>
          </article>
          <article className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {cards.map((card) => (
              <article key={card.id} className="community p-8">
                <p className="text-5xl mb-5">{card.icon}</p>
                <h2 className="font-bold text-3xl mb-3 cursor-pointer transition-all duration-100">
                  {card.title}
                </h2>
                <p className="mb-5">{card.desc}</p>
                <button className="hover:underline text-blue-700 cursor-pointer">
                  {card.link}
                </button>
              </article>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

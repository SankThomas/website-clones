import { useState } from "react"
import { tools } from "../data/tools"
import toolsUpdate from "../images/tools-update.svg"
import android from "../images/android.svg"

export default function Tools() {
  const [cards] = useState(tools)

  return (
    <>
      <section className="bg-gray-100 px-5">
        <div className="md:flex 2xl:max-w-7xl 2xl:mx-auto py-10">
          <article className="w-full mr-10">
            <img
              src={toolsUpdate}
              alt="tools update"
              title="The latest on tools that help you build the highest quality
              Android apps for every Android device."
              className="w-32 my-10"
            />
            <h2 className="text-4xl text-gray-800 font-bold mb-5">
              Tools Updates
            </h2>
            <p className="mb-5">
              The latest on tools that help you build the highest quality
              Android apps for every Android device.
            </p>
            <button className="btn-white mb-10">Go to Studio</button>
          </article>
          <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {cards.map((card) => (
              <article key={card.id}>
                <img
                  src={android}
                  alt={card.title}
                  title={card.title}
                  className="block mx-auto w-1/2"
                />
                <h4 className="uppercase tracking-widest mb-5 text-gray-600 mt-5">
                  {card.tag}
                </h4>
                <h2 className="font-bold text-gray-800 text-2xl mb-3 hover:text-blue-900 cursor-pointer transition-all duration-100">
                  {card.title}
                </h2>
                <p>{card.excerpt}</p>
              </article>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

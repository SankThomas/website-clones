import { useState } from "react"
import { updates } from "../data/platformUpdates"
import android from "../images/android.svg"

export default function PlatformUpdates() {
  const [cards] = useState(updates)
  const [readMore, setReadMore] = useState(false)

  return (
    <>
      <section className="bg-gray-100 px-5">
        <div className="md:flex 2xl:max-w-7xl 2xl:mx-auto py-10">
          <article className="w-full mr-10">
            <img
              src={android}
              alt="tools update"
              title="The latest on tools that help you build the highest quality
              Android apps for every Android device."
              className="w-32 mb-10"
            />
            <h2 className="text-4xl text-gray-800 font-bold mb-5">
              Platform updates
            </h2>
            <p className="mb-5">
              Keep up to date with what's going on with the Android platform.
            </p>
            <button className="btn-white mb-10">Go To Android Platform</button>
          </article>
          <article className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {cards.map((card) => (
              // Move this return into a separate component - then add "Read More" functionality - it will work
              <article key={card.id}>
                <img src={card.image} alt={card.title} title={card.title} />
                <h4 className="uppercase tracking-widest mb-5 text-gray-600 mt-5">
                  {card.tag}
                </h4>
                <h2 className="font-bold text-gray-800 text-2xl mb-3 hover:text-blue-900 cursor-pointer transition-all duration-100">
                  {card.title}
                </h2>
                <p>
                  {`${card.excerpt.substring(0, 150)}...`}{" "}
                  <button onClick={() => setReadMore(!readMore)}>
                    {readMore ? "Read Less" : "Read More"}
                  </button>
                </p>
              </article>
            ))}
          </article>
        </div>
      </section>
    </>
  )
}

export default function Showcase() {
  return (
    <>
      <section className="showcase">
        <div className="text-center py-10 text-white lg:flex flex-col items-center justify-center lg:items-start lg:text-left 2xl:max-w-7xl 2xl:mx-auto">
          <h1 className="font-bold text-4xl mb-5 lg:mt-10 lg:text-6xl lg:max-w-xl">
            Android for developers
          </h1>
          <p className="mb-5 lg:max-w-xl">
            Modern tools and resources to help you build experiences that people
            love, faster and easier, across every Android device.
          </p>
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            autoComplete="off"
            aria-label="Search"
            className="rounded w-9/12 px-4 py-2 lg:w-96"
          />
        </div>
      </section>
    </>
  )
}

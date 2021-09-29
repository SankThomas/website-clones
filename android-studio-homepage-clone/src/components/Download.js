import { FaAndroid, FaGraduationCap, FaPlay } from "react-icons/fa"
import { MdFileDownload, MdOpenInNew } from "react-icons/md"

export default function Download() {
  return (
    <>
      <section className="grid grid-cols-1 gap-5 2xl:max-w-7xl p-5 2xl:mx-auto md:grid-cols-2 lg:grid-cols-3">
        <div>
          <article className="bg-blue-100 hover:shadow-lg transition-all duration-500 py-5 px-4 flex items-center justify-between">
            <h2 className="flex items-center font-bold">
              <FaAndroid className="mr-2 text-3xl text-green-500" /> Download
              Android Studio
            </h2>
            <MdFileDownload className="text-2xl text-gray-900" />
          </article>
        </div>
        <div>
          <article className="bg-blue-100 hover:shadow-lg transition-all duration-500 py-5 px-4 flex items-center justify-between">
            <h2 className="flex items-center font-bold">
              <FaPlay className="mr-2 text-2xl text-blue-500" /> Launch Play
              Console
            </h2>
            <MdOpenInNew className="text-2xl text-gray-900" />
          </article>
        </div>
        <div>
          <article className="bg-blue-100 hover:shadow-lg transition-all duration-500 py-5 px-4 flex items-center justify-between">
            <h2 className="flex items-center font-bold">
              <FaGraduationCap className="mr-2 text-3xl text-blue-500" /> View
              Android courses
            </h2>
          </article>
        </div>
      </section>
    </>
  )
}


function Banner() {
  return (
    <div className="bg-black">
    <div className="bg-black object-contain max-w-7xl mx-auto h-40 overflow-y-hidden px-14 py-12 flex flex-row justify-between ">
    <div>
      <p className="text-5xl font-bold text-white">Ready to get started?</p>
      <p className="text-4xl text-transparent bg-clip-text bg-gradient-to-tr from-gray-200 via-green-300 to-green-800 font-medium">
        Get in touch or explore our courses today!
      </p>
    </div>
    <div>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-950  to-green-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-3 text-center mr-2 mb-2"
      >
        Get Started
      </button>
      <button
        type="button"
        className="text-white bg-gradient-to-r from-green-950  to-green-700 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-lg px-5 py-3 text-center mr-2 mb-2"
      >
        Explore Courses
      </button>
    </div>
  </div>
  </div>

  )
}

export default Banner

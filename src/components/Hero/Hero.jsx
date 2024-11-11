export default function Hero() {
  return (
    <>
    <div className="bg-gradient-to-tr from-black via-black to-blue-950 w-full h-[100vh] flex items-center justify-center bg-opacity-50 backdrop-blur object-contain overflow-y-hidden">
        <div className="max-w-1/2 h-auto">
        <h1 className="text-white text-7xl font-bold max-w-4xl pl-12 pt-32">Transform Your Lawn with the <span className="text-transparent bg-clip-text bg-gradient-to-tr from-gray-700 via-pink-500 to-pink-800">Perfect Cut</span> Every Time!</h1>
        <p className="text-white text-2xl max-w-3xl font-semibold pl-12 pt-10 pb-0 ">Say goodbye to overgrown grass and hello to a beautifully maintained lawn. Our professional lawn mowing services bring out the best in your yard, giving you more time to relax and enjoy the outdoors. Book a service today and see the difference!</p>
     
        </div>
        <img src="./assets/room.png" className="relative max-w-3xl mt-5 scale-120 mr-8" alt="" />
    </div>
    </>
  )
}

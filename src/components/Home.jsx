import { HOMEPAGE_CONTENT } from "../constants"
import profilePic from "../assets/myPicture.png"

const Home = () => {
  return (
  <section id="home" className=" pb-4 lg:mb-36">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:ml-56 lg:mt-16 lg:pt-20 pb-10">
                <h1 className="font-thin tracking-tight text-6xl text-gray-400"> Hi, I'm <span className="bg-gradient-to-r from-emerald-800 via-lime-600 to-emerald-800 bg-clip-text text-6xl tracking-tight text-transparent"> Hailee</span>.</h1>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-gray-700 text-xl">
                    {HOMEPAGE_CONTENT}
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img className="rounded-lg w-56 lg:w-96"  src={profilePic} alt="picture of me driving a duck boat!"></img>
            </div>
        </div>
    </div>
  </section>
  )
}

export default Home
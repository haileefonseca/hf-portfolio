import { HOMEPAGE_CONTENT } from "../constants"
import profilePic from "../assets/myPicture.png"

const Home = () => {
  return (
  <div className=" pb-4 lg:mb-36">
    <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
            <div className="flex flex-col items-center lg:items-start lg:ml-56">
                <h1 className="pb-5 pt-10 text-xl text-teal-700 font-thin tracking-tight lg:mt-16 lg:text-2xl">Hi! Welcome to my portfolio. I'm </h1>
                <span className="bg-gradient-to-r from-indigo-800 via-violet-500 to-indigo-800 bg-clip-text text-6xl tracking-tight text-transparent"> Hailee Fonseca</span>
                <p className="my-2 max-w-xl py-6 font-light tracking-tighter text-teal-700 text-xl">
                    {HOMEPAGE_CONTENT}
                </p>
            </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex justify-center">
                <img className="rounded max-w-96"  src={profilePic} alt="picture of me!"></img>
            </div>
        </div>
    </div>
  </div>
  )
}

export default Home
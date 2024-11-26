import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <div className="pb-4">
        <h1 className="mt-20 text-center text-4xl text-teal-800">About Me</h1>
        <div className="flex flex-wrap">
            <div className="w-full p-8 mx-10 lg:mx-56">
                    <div className="flex justify-center lg:justify-start text-xl">
                        <p className="text-teal-800">{ABOUT_TEXT}</p>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default About
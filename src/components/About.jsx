import { ABOUT_TEXT } from "../constants"

const About = () => {
  return (
    <section id="about" className="pb-10">
        <h1 className="mt-20 text-center text-4xl text-gray-700">About Me</h1>
        <div className="flex flex-wrap">
            <div className="w-full p-8 mx-10 lg:mx-40">
                    <div className="flex justify-center lg:justify-start text-xl">
                        <p className="text-gray-700">{ABOUT_TEXT}</p>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default About
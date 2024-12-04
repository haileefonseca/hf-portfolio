import {CONTACT} from '../constants'

const Contact = () => {
  return (
    <section id="contact" className="pb-10 pt-10">
        <h1 className="pt-10 pb-5 text-center text-4xl text-gray-700">Contact me</h1>
        <div className="text-center">
            <a href='mailto: fonseca.h@northeastern.edu' className='border-b border-gray-600 text-gray-700'>{CONTACT.email}</a>
        </div>
    </section>
  )
}

export default Contact
import {CONTACT} from '../constants'

const Contact = () => {
  return (
    <div className="pb-10 pt-10">
        <h1 className="my-10 text-center text-4xl text-teal-800">Contact me!</h1>
        <div className="text-center">
            <a href='mailto: fonseca.h@northeastern.edu' className='border-b border-teal-800 text-teal-800'>{CONTACT.email}</a>
        </div>
    </div>
  )
}

export default Contact
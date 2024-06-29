import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import EmailIcon from '@mui/icons-material/Email';
import  SocialSites  from '../../utils/SocialSites';
import Navbaar from "../navigation/Navbaar"
import Footer from "./Footer"
const Getintouch = () => {
  return (
    <>
    <Navbaar/>
    <div className="flex flex-col lg:flex-row lg:px-12 py-4 items-center sm:gap-3">
      <div className="flex-1  flex flex-col gap-4 p-4 lg:p-0">
        <h1 className="text-4xl lg:text-6xl font-bold text-[#2d79e5]">Get in touch</h1>
        <p className="font-semibold text-lg text-[#5eacf4]">
          I&apos;d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out. I&apos;m here to assist you and ensure you have the best experience possible.
        </p>
        <p className="flex items-center"><AddIcCallIcon className="mr-2" /> 6398928159</p>
        <p className="flex items-center"><EmailIcon className="mr-2" /> rawatpraveen477@gmail.com</p>
       <SocialSites/>
      </div>

      <div className="isolate lg:p-2 px-6 py-12 sm:py-8 lg:px-8 flex-1">
        <h2 className="text-3xl lg:text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">Contact Form</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600 text-center">
          Feel free to fill out the contact form below:
        </p>
        <form className="mx-auto mt-10 lg:mt-3 lg:px-10 px-4 sm:px-4 max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">First name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">Last name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone number</label>
              <input
                type="tel"
                name="phone-number"
                id="phone-number"
                autoComplete="tel"
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
              <textarea
                name="message"
                id="message"
                rows={4}
                className="mt-2.5 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className=" inline-block rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let&apos;s talk
            </button>
          </div>
        </form>
      </div>
    </div>
   <Footer/>
     </>
  )
}

export default Getintouch;

import React from 'react'

const CommentSection = () => {
    return (
        <section className=" py-8 lg:py-16 px-40 mx-auto bg-black " >

        <h1 className="text-6xl lg:text-7xl font-bold text-center text-white p-5 mt-5">
         Contact{" "}
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
          us
        </span>
      </h1>

        <p className="mb-8 lg:mb-16 font-light text-center text-white sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Need details about our Premium plan? Let us know.</p>
        <form action="#" className="space-y-8">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-grow">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Your Name</label>
              <input type="text" id="name" className="shadow-sm bg-black border text-white border-white text-sm rounded-lg border-y-indigo-500 border-x-purple-600  w-full p-2.5 placeholder:text-white" placeholder="Your Name" required />
            </div>
            <div className="flex-grow">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">Your Email</label>
              <input type="email" id="email" className="shadow-sm bg-black border text-white border-white text-sm rounded-lg border-y-indigo-500 border-x-purple-600  w-full p-2.5 placeholder:text-white" placeholder="name@gmail.com" required />
            </div>
          </div>
          <div>
            <label htmlFor="subject" className="block mb-2 text-sm font-medium text-white">Subject</label>
            <input type="text" id="subject" className="shadow-sm bg-black border text-white border-white text-sm rounded-lg border-y-indigo-500 border-x-purple-600 placeholder:text-white  w-full p-2.5" placeholder="Let us know how we can help you" required />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block mb-2 text-sm font-medium text-white">Your message</label>
            <textarea id="message" rows={6} className="shadow-sm bg-black border text-white border-y-indigo-500 border-x-purple-600  placeholder:text-white text-sm rounded-lg focus:ring-primary-500  w-full p-2.5" placeholder="Leave a comment..."></textarea>
          </div>
          <div className="flex justify-center">
          <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-yellow-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
        </div>   
       </form>
      </section>
      
    );
  };
  
  
export default CommentSection
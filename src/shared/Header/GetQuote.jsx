import { useEffect } from "react";


const GetQuote = () => {
  //scrolling 
  useEffect(()=>{
    window.scrollTo(0, 0)
  }, [ ])
    return (
        <div className="bg-gray-100">
             <div className=" text-gray-100 px-8 py-8 ">
             <div className="text-center w-full">
             <div>
            <h2 className="lg:text-6xl md:text-4xl sm:text-3xl font-bold leading-tight text-[#36747C]">Make a request!</h2>
            <div className="text-[#36747C] font-bold mt-8">
            The way to get started is to quit talking and begin doing
            </div>
           </div>
        </div>
        <div
        className="max-w-screen-xl px-8 md:px-12 lg:px-16 xl:px-72 py-16 mx-auto text-gray-900 rounded-lg">
        
        <div className="w-full">
          <div className="lg:flex justify-center items-center gap-5">
          <div className="mt-8">
            <span className="uppercase text-sm sm:pb-3 text-gray-600 font-bold">Full Name</span>
            <input  className="w-full  text-gray-900 mt-2 p-3 lg:pr-32 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Full Name"/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Address</span>
            <input className="w-full  text-gray-900 mt-2 p-3 lg:pr-32 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Address"/>
          </div>
          </div>
          <div className="lg:flex justify-center items-center gap-5">
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Email</span>
            <input className="w-full  text-gray-900 mt-2 p-3 lg:pr-32 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Email"/>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Phone</span>
            <input className="w-full  text-gray-900 mt-2 p-3 lg:pr-32 rounded-lg focus:outline-none focus:shadow-outline"
              type="text" placeholder="Phone"/>
          </div>
          </div>
          <div className="mt-8">
            <span className="uppercase text-sm text-gray-600 font-bold">Message</span>
            <textarea
              className="w-full h-32  text-gray-900 mt-2 p-3 lg:pr-32 rounded-lg focus:outline-none focus:shadow-outline" placeholder="Enter Message"></textarea>
          </div>
          <div className="mt-8">
            <button
              className="uppercase text-sm font-bold tracking-wide bg-brand text-gray-100 p-3 rounded-lg w-full focus:outline-none focus:shadow-outline">
              Send Request
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default GetQuote;
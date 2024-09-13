"use client";
import Navbar from './components/Navbar';
import Image from 'next/image';

export default function Home() {

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="absolute inset-0 z-0">
        {/* Background Image */}
        <Image
          src="/images/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-50"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center p-4 space-y-8 my-24">
        {/* Highlighted Text */}
        <h1 className="text-3xl md:text-5xl font-semibold mb-6 leading-relaxed lg:leading-normal">
          Where Every <br className="sm:inline lg:hidden" />Journey Counts. <br className="sm:inline lg:hidden" />
          Make a Difference <br className="sm:inline lg:hidden" /> Globally.
        </h1>

        {/* Form Container */}
        <div className="bg-white font-semibold p-4 mt-10 rounded-lg sm:rounded-full shadow-lg lg:w-full max-w-2xl w-3/4 text-gray-900">
          <form className="flex flex-col sm:flex-row lg:justify-between sm:space-x-4 space-y-4 sm:space-y-0">

            {/* Location Input */}
            <div className="relative flex-grow w-full px-3 sm:px-8">
              <select className="w-full rounded-xl py-2 bg-transparent">
                <option>Location</option>
                <option>New York</option>
                <option>London</option>
                <option>Tokyo</option>
                <option>Other</option>
              </select>
            </div>

            {/* Skills Input */}
            <div className="relative flex-grow w-full px-3 sm:px-8">
              <select className="w-full rounded-xl py-2 bg-transparent">
                <option>Skill</option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Other</option>
              </select>
            </div>

            {/* Duration Input */}
            <div className="relative flex-grow w-full px-3 sm:px-8">
              <select className="w-full rounded-xl py-2 bg-transparent">
                <option>Duration</option>
                <option>1-3 Months</option>
                <option>3-6 Months</option>
                <option>6-12 Months</option>
                <option>Other</option>
              </select>
            </div>
          </form>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="relative py-10 w-full md:w-1/2 mx-auto hidden md:block">
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <h1 className="text-3xl font-bold mb-8">Trusted by</h1>
          {/* Logos */}
          <div className="flex items-center justify-around">
            {/* Google Logo */}
            <div className="w-32 h-10 relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
                alt="Google"
                className="w-full h-full object-contain"
              />
            </div>
            {/* YouTube Logo */}
            <div className="w-32 h-10 relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Facebook Logo */}
            <div className="w-32 h-10 relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

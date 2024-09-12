"use client";
import Navbar from './components/Navbar';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
export default function Home() {
  const handleSubmit = () => {
    // we can get the selected data and use it to search here
    console.log("Search");

  };

  return (
    <div className="relative min-h-screen">
      {/* Navbar */}
      <Navbar />
      <div className="absolute inset-0 z-0">
        {/* Image added for background */}
        <Image
          src="/images/background.jpg"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-80"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center text-white text-center p-4 space-y-4 my-24">
        {/* Highlighted Text */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          Where Every Journey Counts.
          <br /> Make a Difference Globally.
        </h1>

        <div className="bg-white font-semibold bg-opacity-20 p-6 rounded-lg sm:rounded-full shadow-lg w-full max-w-2xl text-gray-900 mx-auto">
          <form className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-4">
            {/* Location Input */}
            <div className="relative flex-grow max-w-full">
              <select className="w-full rounded-xl p-3 bg-transparent">
                <option>Location</option>
                <option>New York</option>
                <option>London</option>
                <option>Tokyo</option>
                <option>Other</option>
              </select>
            </div>

            {/* Skills Input */}
            <div className="relative flex-grow">
              <select className="w-full rounded-xl p-3 bg-transparent">
                <option>Skills</option>
                <option>Web Development</option>
                <option>Graphic Design</option>
                <option>Project Management</option>
                <option>Other</option>
              </select>
            </div>

            {/* Duration Input */}
            <div className="relative flex-grow">
              <select className="w-full rounded-xl p-3 bg-transparent">
                <option>Duration</option>
                <option>1-3 Months</option>
                <option>3-6 Months</option>
                <option>6-12 Months</option>
                <option>Other</option>
              </select>
            </div>
            {/* Search Button */}
            <div className="flex items-center justify-center">
              <button
                type="button"
                onClick={() => handleSubmit()}
                className="text-white p-2 rounded-md flex items-center space-x-2 w-full sm:flex justify-center bg-cyan-300 lg:bg-transparent md:bg-transparent"
              >
                <span className="block sm:hidden">Search</span>
                <FaSearch className="block sm:inline" />
              </button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative py-10 w-1/2 mx-auto hidden md:block">
        <div className="container mx-auto text-center">
          {/* Section Title */}
          <h1 className="text-3xl font-bold mb-8 z-20">Trusted by</h1>

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

            {/* YouTube Logo to display*/}
            <div className="w-32 h-10 relative">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
                alt="YouTube"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Facebook Logo to display*/}
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

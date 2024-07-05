import React from 'react';

export default function Page() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="password">
            Password
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="phoneNumber">
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phoneNumber"
            type="tel"
            placeholder="Enter your Phone Number"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="company">
            Company
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="company"
            type="text"
            placeholder="Company Name"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="professionalTitle">
            Professional Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="professionalTitle"
            type="text"
            placeholder="Professional Title"
          />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="professionalBio">
            Professional Bio
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="professionalBio"
            placeholder="Enter your professional bio"
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="location">
            Location
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            placeholder="Enter your location"
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="linkedInProfile">
            LinkedIn Profile
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="linkedInProfile"
            placeholder="Enter your LinkedIn Profile url"
          ></textarea>
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="accreditedInvestorStatus">
            Accredited Investor Status
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="accreditedInvestorStatus"
            placeholder="Enter the Accredited Investor Status"
          ></textarea>
        </div>
        <div className="flex items-center justify-center mb-4">
          <button
            className="bg-gray-900 text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Book Appointment
          </button>
        </div>
      </form>
    </div>
  );
}
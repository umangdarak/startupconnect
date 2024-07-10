import { TextField, TextareaAutosize } from '@mui/material';
import { Button, TextArea } from '@radix-ui/themes';
import React from 'react';

export default function Page() {
  return (
    <div className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <form className="py-4 px-6" action="" method="POST">
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="name">
            Name
          </label>
        <TextField type="text" required id="outlined-basic" name="Name" placeholder="Enter your Name" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="email">
            Email
          </label>
        <TextField type="email" required id="outlined-basic" name="Email" placeholder="Enter your Mail" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="password">
            Password
          </label>
        <TextField type="password" required id="outlined-basic" name="Password" placeholder="Enter your Password" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="phoneNumber">
            Phone Number
          </label>
        <TextField type="text" required id="outlined-basic" name="Phone Number" placeholder="Enter your Password" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="company">
            Company
          </label>
        <TextField type="text" required id="outlined-basic" name="LinkedIn Profile" placeholder="Enter your LinkedIn Profile" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="professionalTitle">
            Professional Title
          </label>
        <TextField type="text" required id="outlined-basic" name="Comapny Name" placeholder="Enter your Company Name" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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
        <TextField type="text" required id="outlined-basic" name="Location" placeholder="Enter your Location" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex items-center">
          <label className="block text-gray-700 font-bold mb-2 mr-4 w-1/3" htmlFor="linkedInProfile">
            LinkedIn Profile
          </label>
        <TextField type="text" required id="outlined-basic" name="Patent Application Number" placeholder="Enter your Patent Application Number" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4 flex-col flex col-span-2">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Person In Contact">
            Contact Person
        </label>
        <div className='flex flex-row'>
        <TextField type="text" required id="outlined-basic" name="Person In Contact" placeholder="Enter the contact person name" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        <TextField type="text" required id="outlined-basic" name="Person In Contact" placeholder="Enter the contact person details" size="small" className=" appearance-none rounded w-full px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
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

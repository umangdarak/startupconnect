import { TextField, TextareaAutosize } from '@mui/material';
import { Button, TextArea } from '@radix-ui/themes';
import React from 'react';

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden" style={{ width: '75%' }}>
      <form className="py-4 px-6" action="" method="POST">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Name">
            Name
          </label>
        <TextField type="text" required id="outlined-basic" name="Name" placeholder="Enter your Name" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Email">
            Email
          </label>
        <TextField type="email" required id="outlined-basic" name="Email" placeholder="Enter your Mail" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Password">
            Password
          </label>
        <TextField type="password" required id="outlined-basic" name="Password" placeholder="Enter your Password" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Phone Number">
            Phone Number
          </label>
        <TextField type="text" required id="outlined-basic" name="Phone Number" placeholder="Enter your Password" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="LinkedIn Profile">
            LinkedIn Profile
          </label>
        <TextField type="text" required id="outlined-basic" name="LinkedIn Profile" placeholder="Enter your LinkedIn Profile" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Company Name">
            Company Name
          </label>
        <TextField type="text" required id="outlined-basic" name="Comapny Name" placeholder="Enter your Company Name" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        {/* <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Registration Number">
            Registration Number
          </label>
        <TextField type="text" required id="outlined-basic" name="Registered Number" placeholder="Enter your Registered Number" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div> */}
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Patent Application Number">
            Patent Application Number
          </label>
        <TextField type="text" required id="outlined-basic" name="Patent Application Number" placeholder="Enter your Patent Application Number" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Industry">
            Industry
          </label>
        <TextField type="text" required id="outlined-basic" name="Industry" placeholder="Enter your Industry" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
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
        <div className="mb-4 col-span-2">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Company Description">
            Company Description
          </label>
        <TextArea  required id="outlined-basic" name="Company Description" placeholder="Enter your Company Description" size="3" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="col-span-2 flex items-center justify-center mb-4">
        <Button variant="soft" className='button1'>
        Submit
        </Button>
        </div>
        </div>
      </form>
    </div>
  );
}
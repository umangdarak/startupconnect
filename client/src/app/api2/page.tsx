import { TextField } from '@mui/material';
import { Button } from '@radix-ui/themes';
import React from 'react';

export default function Page() {
  return (
    <div className="max-w-3xl mx-auto mt-10 bg-white shadow-lg rounded-lg overflow-hidden">
      <form className="py-4 px-6 grid grid-cols-1 md:grid-cols-2 gap-4" action="" method="POST">
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
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Company">
            Company
          </label>
        <TextField type="text" required id="outlined-basic" name="Comapny" placeholder="Enter your Company Name" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Proffesional Title">
            Professional Title
          </label>
        <TextField type="text" required id="outlined-basic" name="Professional Title" placeholder="Enter your Professional Title" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
       <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Location">
            Location
          </label>
        <TextField type="text" required id="outlined-basic" name="Location" placeholder="Enter your Location" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="LinkedIn Profile">
            LinkedIn Profile
          </label>
        <TextField type="text" required id="outlined-basic" name="LinkedIn Profile" placeholder="Enter your LinkedIn Profile" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Professional Bio">
            Professional Bio 
          </label>
        <TextField type="text" required id="outlined-basic" name="Professional Bio" placeholder="Enter your Professional Bio" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 font-bold mb-1 px-1" htmlFor="Accredited Investor Status">
            Accredited Investor Status 
          </label>
        <TextField type="text" required id="outlined-basic" name="Accredited Investor Status" placeholder="Enter your Accredited Investor Status" size="small" className=" appearance-none rounded w-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="col-span-2 flex items-center justify-center mb-4">
        <Button variant="soft" className='button1'>
        Submit
        </Button>
        </div>
      </form>
    </div>
  );
}
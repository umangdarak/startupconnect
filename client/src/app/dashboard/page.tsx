
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-wrap">
      <div className="w-full lg:w-8/12 rounded-3xl bg-gray-800 p-6 mb-8">
        <div className="flex items-center justify-between text-white mb-8">
          <p className="text-2xl font-bold">Home</p>
        </div>
        <div className="overflow-y-auto max-h-screen">
          {/* First Section */}
          <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-4 sm:grid-cols-2 mb-8 border border-gray-300 transition-transform transform hover:scale-105">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0" style={{ height: '400px' }}>
              <Image
                src="/images/logo.png"
                alt="Revolutionizing Our Production Process"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-8 sm:pr-12 sm:pl-8">
              <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">Technology</p>
              <a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">Revolutionizing Our Production Process</a>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Learn how our recent investment in new technology has revolutionized our production process, leading to improved efficiency and product quality.</p>
              <div className="flex items-center gap-4">
                {/* <img src="/images/logo.png" className="inline-block relative object-cover object-center !rounded-full w-16 h-16" alt="John Doe" /> */}
                {/* <div>
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">John Doe</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">2022-08-15</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Second Section */}
          <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-4 sm:grid-cols-2 mb-8 border border-gray-300 transition-transform transform hover:scale-105">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0" style={{ height: '400px' }}>
              <Image
                src="/images/logo.png"
                alt="Sustainable Practices for a Greener Future"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-8 sm:pr-12 sm:pl-8">
              <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">Sustainability</p>
              <a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">Sustainable Practices for a Greener Future</a>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility.</p>
              <div className="flex items-center gap-4">
                {/* <img src="/images/logo.png" className="inline-block relative object-cover object-center !rounded-full w-16 h-16" alt="Alex Johnson" />
                <div>
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">Alex Johnson</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">2022-09-20</p>
                </div> */}
              </div>
            </div>
          </div>

          {/* Third Section */}
          <div className="relative flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-none grid gap-4 sm:grid-cols-2 mb-8 border border-gray-300 transition-transform transform hover:scale-105">
            <div className="relative bg-clip-border rounded-xl overflow-hidden bg-white text-gray-700 shadow-lg m-0" style={{ height: '400px' }}>
              <Image
                src="/images/logo.png"
                alt="Sustainable Practices for a Greener Future"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-8 sm:pr-12 sm:pl-8">
              <p className="block antialiased font-sans text-sm font-light leading-normal text-inherit mb-4">Sustainability</p>
              <a href="#" className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 mb-2 normal-case transition-colors hover:text-gray-700">Sustainable Practices for a Greener Future</a>
              <p className="block antialiased font-sans text-base leading-relaxed text-inherit mb-8 font-normal !text-gray-500">Find out how our investment in sustainable practices is driving us towards a greener future, showcasing our commitment to environmental responsibility.</p>
              <div className="flex items-center gap-4">
                {/* <img src="/images/logo.png" className="inline-block relative object-cover object-center !rounded-full w-16 h-16" alt="Alex Johnson" />
                <div>
                  <p className="block antialiased font-sans text-base font-light leading-relaxed text-blue-gray-900 mb-0.5">Alex Johnson</p>
                  <p className="block antialiased font-sans text-sm leading-normal text-gray-700 font-normal">2022-09-20</p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar */}
      <div className="mt-8 w-full lg:mt-0 lg:w-4/12 lg:pl-4">
        <div className="rounded-3xl bg-gray-800 px-6 pt-6">
          <div className="flex pb-6 text-2xl font-bold text-white">
            <p>Client Messages</p>
          </div>
          {/* Client Messages content */}
        </div>
      </div>
    </div>
  );
}

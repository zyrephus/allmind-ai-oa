"use client";  // Ensure the component is client-side for using hooks

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null); // State to track which dropdown is open

  const toggleDropdown = (dropdown: string) => {
    setOpenDropdown(openDropdown === dropdown ? null : dropdown); // Toggle between opening and closing the dropdown
  };

  return (
    <nav className="sticky top-0 left-0 right-0 z-50 flex items-center h-24 px-8 mx-auto bg-[#faf4eee6] backdrop-blur-[10px] border-b border-[#e7dfd8]">
      {/* Left */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/655bac9fc699356b43d171a0_Mantle_Logo_Lockup.svg"
          alt="Mantle | Equity Management from the Future"
          width={180}
          height={40}
          className="w-auto h-10"
        />
      </Link>
      {/* Right */}
      <div className="flex items-center space-x-8 ml-auto">
        {/* Dropdown for Products */}
        <div className="relative group flex items-center">
          <button
            className="text-[#0e0f11] hover:text-[#aa8540] flex items-center"
            onClick={() => toggleDropdown("products")}
          >
            Products
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/6565007a66961d34c8338092_chevron-down.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1 w-4 h-4 opacity-50"
            />
          </button>
          {openDropdown === "products" && (
            <div className="absolute top-full mt-2 w-48 bg-black bg-opacity-80 text-white rounded-2xl shadow-lg py-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/products/feature1" className="block px-4 py-2 hover:bg-[#333438] rounded-lg">Feature 1</Link>
                </li>
                <li>
                  <Link href="/products/feature2" className="block px-4 py-2 hover:bg-[#333438] rounded-lg">Feature 2</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Dropdown for Solutions */}
        <div className="relative group flex items-center">
          <button
            className="text-[#0e0f11] hover:text-[#aa8540] flex items-center"
            onClick={() => toggleDropdown("solutions")}
          >
            Solutions
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/6565007a66961d34c8338092_chevron-down.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1 w-4 h-4 opacity-50"
            />
          </button>
          {openDropdown === "solutions" && (
            <div className="absolute top-full mt-2 w-48 bg-black bg-opacity-80 text-white rounded-2xl shadow-lg py-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/solutions/solution1" className="block px-4 py-2 hover:bg-[#333438] rounded-lg">Solution 1</Link>
                </li>
                <li>
                  <Link href="/solutions/solution2" className="block px-4 py-2 hover:bg-[#333438] rounded-lg">Solution 2</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Dropdown for Resources */}
        <div className="relative group flex items-center">
          <button
            className="text-[#0e0f11] hover:text-[#aa8540] flex items-center"
            onClick={() => toggleDropdown("resources")}
          >
            Resources
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/6565007a66961d34c8338092_chevron-down.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1 w-4 h-4 opacity-50"
            />
          </button>
          {openDropdown === "resources" && (
            <div className="absolute top-full mt-2 w-48 bg-black bg-opacity-80 text-white rounded-2xl shadow-lg py-4">
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/resource1" className="block px-4 py-2 hover:bg-[#333438] rounded-lg">Resource 1</Link>
                </li>
                <li>
                  <Link href="/resources/resource2" className="block px-4 py-2 hover:bg-[#333438] rounded-lg">Resource 2</Link>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Login */}
        <Link href="/login" className="inline-block border border-black text-black bg-transparent px-6 py-3 rounded-full min-w-[150px] hover:bg-[#e9e1db]">
          <div className="flex justify-center">
            <span className="uppercase font-medium tracking-widest text-xs leading-5">Login</span>
          </div>
        </Link>
        {/* Get Started */}
        <Link href="/getstarted" className="inline-block border border-black text-white bg-black px-6 py-3 rounded-full min-w-[150px] hover:bg-[#333438]">
          <div className="flex justify-center">
            <span className="uppercase font-medium tracking-widest text-xs leading-5">Get Started</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

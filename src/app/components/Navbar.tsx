import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-[1440px] sticky top-0 left-0 right-0 z-50 flex items-center h-24 px-8 mx-auto bg-[#faf4eee6] backdrop-blur-[10px] border-b border-[#e7dfd8]">
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
          <button className="text-[#0e0f11] hover:text-gray-900 flex items-center">
            Products
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/6565007a66961d34c8338092_chevron-down.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1 w-4 h-4 opacity-50"
            />
          </button>
        </div>
        {/* Dropdown for Solutions */}
        <div className="relative group flex items-center">
          <button className="text-[#0e0f11] hover:text-gray-900 flex items-center">
            Solutions
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/6565007a66961d34c8338092_chevron-down.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1 w-4 h-4 opacity-50"
            />
          </button>
        </div>
        {/* Dropdown for Resources */}
        <div className="relative group flex items-center">
          <button className="text-[#0e0f11] hover:text-gray-900 flex items-center">
            Resources
            <Image
              src="https://cdn.prod.website-files.com/64b05c5307d994750a3d2dde/6565007a66961d34c8338092_chevron-down.svg"
              alt=""
              width={16}
              height={16}
              className="ml-1 w-4 h-4 opacity-50"
            />
          </button>
        </div>

        {/* Login */}
        <Link href="/login" className="inline-block border border-black text-black bg-transparent px-6 py-3 rounded-full min-w-[150px]">
          <div className="flex justify-center">
            <span className="uppercase font-medium tracking-widest text-xs leading-5">Login</span>
          </div>
        </Link>
        {/* Get Started */}
        <Link href="/login" className="inline-block border border-black text-white bg-black px-6 py-3 rounded-full min-w-[150px]">
          <div className="flex justify-center">
            <span className="uppercase font-medium tracking-widest text-xs leading-5">Get Started</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

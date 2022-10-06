import Image from "next/image"
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <div className="flex w-full items-center justify-between px-5">
      <div className="flex items-center space-x-5">
        <Image
          src="https://logos-download.com/wp-content/uploads/2016/09/Dribbble_logo_black.png"
          alt=""
          height={20}
          width={55}
        />
        <p>Inspiration</p>
        <p>Find Work</p>
        <p>Learn Design</p>
        <p>Go Pro</p>
        <p>Design Files</p>
        <p>Hire Designers</p>
      </div>


      <div className="flex items-center space-x-3 ">
        <IoSearch className="text-gray-500 h-6 w-6" />
        <p className="text-gray-500">Sign In</p>
        <button className="p-2 bg-primay rounded-md text-base">Share my Work</button>
      </div>
    </div>
  )
}

export default Header

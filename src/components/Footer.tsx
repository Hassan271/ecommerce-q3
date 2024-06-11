import React from 'react'
import Image from "next/image";
import logo from "../images/logo.png";


const Footer = () => {
  return (
    <div className="w-full h-20 bg-amazon_light text-gray-300 flex items-center justify-center gap-4">
      <Image className="w-24" src={logo} alt="logo" />

{/* all Right Reserve ------------------- */}
<p className="text-sm -mt-4">
        All rights reserved{" "}
        <a
          className="hover:text-white hover:underline decoration-[1px] cursor-pointer duration-300"
          href="https://hassan271.github.io/HassanFaroq/"
          target="_blank"
        >
          hassan271.github.io/HassanFaroq
        </a>
</p>


    </div>
  )
}

export default Footer

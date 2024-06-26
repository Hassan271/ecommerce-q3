import React from 'react'
import Image from "next/image";
import logo from "../../images/logo.png";
// card icon for Favorite 
import cartIcon from "../../images/cartIcon.png";

// npm install react-icons --save  
import { BiCaretDown } from "react-icons/bi";
import { HiOutlineSearch } from "react-icons/hi";
import { SlLocationPin } from "react-icons/sl";

import Link from "next/link";

// sueSelector 
import { useSelector } from 'react-redux';
import { StateProps } from '../../../type';

//session 
import { useSession, signIn, signOut } from "next-auth/react"


const Header = () => {

    // session 
    const { data: session } = useSession()
// -------------------------------
const { productData, favoriteData } = useSelector(
    (state: StateProps) => state.next);
// console.log(productData, favoriteData);
// console.log(session);

// ------------------------------
    return (
    <div  className="w-full h-20 bg-amazon_blue text-lightText sticky top-0 z-50" >
        <div className="h-full w-full mx-auto inline-flex items-center justify-between gap-1 mdl:gap-3 px-4" >

    {/* logo Start ======================================================================= */}
        <div>
        
        <Link
          href={"/"} 
          className="px-2 border border-transparent hover:border-white cursor-pointer 
          duration-300 flex items-center justify-center h-[70%]">

          <Image className="w-28 object-cover mt-1" src={logo} alt="Logo" />
        </Link>

        </div>
    {/* logo Ends ======================================================================= */}

    {/* Delivery to Start ======================================================================= */}
        <div className="px-2 border border-transparent hover:border-white cursor-pointer 
        duration-300 items-center justify-center h-[70%] hidden xl:inline-flex gap-1">
          <SlLocationPin />
          <div className="text-xs">
            <p>Deliver to</p>
            <p className="text-white font-bold uppercase">USA</p>
          </div>
        </div>
    {/* Delivery to Ends ======================================================================= */}

    {/* Search Bar Start ======================================================================= */}

        <div className='flex-1 h-10 hidden md:inline-flex items-center justify-between relative'>
        
    {/* input ------------------------------------------------- */}
        <input type="text" placeholder='Search Here ............' 
        className='w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black 
        border-[3px] border-transparent outline-none focus-visible:border-amazon_yellow' />
        
        <span className="w-12 h-full bg-amazon_yellow text-black text-2xl 
        flex items-center justify-center absolute right-0 rounded-tr-md rounded-br-md">
            <HiOutlineSearch/>
        </span>
        
        </div>

    {/* Search Bar Ends ======================================================================= */}
        
    {/* Sign in Start  ========================================================================= */}
    
    <div  
    onClick={() => signIn()}

    className="text-xs text-gray-100 flex flex-col justify-center px-2 
    border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] ">
        <p>Hello, Sign in</p>
        <p className="text-white font-bold flex items-center">
            Account & Lists
            <span><BiCaretDown/></span>
        </p>
    </div>

    {/* Sign in Ends  ========================================================================= */}

    {/* Favorite Start  ======================================================================= */}
    <div className="text-xs text-gray-100 flex flex-col justify-center px-2 
    border border-transparent hover:border-white cursor-pointer duration-300 h-[70%] ">
        <p>
        Marked </p>
        <p className="text-white font-bold flex items-center">
        & Favorite</p>
    </div>
    {/* Favorite Ends  ======================================================================= */}

    {/* cart Starts ============================================================================= */}
    {/* relative= because we have text for it */}
    <Link href={'/cart'} 
    className="flex items-center px-2 border border-transparent hover:border-white
     cursor-pointer duration-300 h-[70%] relative">
    <Image
            className="w-auto object-cover h-8"
            src={cartIcon}
            alt="cartImg"
    />
    <p className='text-xs text-white font-bold mt-3'>Card</p>
    <span className="absolute text-amazon_yellow text-sm top-2 left-[29px] font-semibold">
        {productData ? productData.length:0 }
    </span>

    </Link>
    {/* cart Ends  ============================================================================= */}



        </div>
    </div>
  )
}

export default Header;
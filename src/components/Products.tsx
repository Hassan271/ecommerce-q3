import React from 'react'
// image------------------------------------
import Link from "next/link";
import Image from "next/image";

// import products
import { ProductProps } from "../../type";
import { HiShoppingCart } from 'react-icons/hi';
import { FaHeart } from 'react-icons/fa';

// FormattedPrice------------
import FormattedPrice from './FormattedPrice'
// React Redux store 
import { useDispatch } from 'react-redux';

import { addToCart, addToFavorite } from "@/store/nextSlice";


// catch product data by props 
const Products = ({productData}: any) => {
// useDispatch 
const dispatch = useDispatch();

// addtoCart
// import { addToCart, addToFavorite } from "./store/nextSlice";


// to check by console --------------
// console.log(productData);

return (

    <div className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    
    {productData.map((  {
          _id,
          title,
          brand,
          category,
          description,
          image,
          isNew,
          oldPrice,
          price,
        }: ProductProps ) => 
    (
        <div  key={_id}
        className="w-full bg-white text-black p-4 border border-gray-300 rounded-lg group overflow-hidden"
        >
        
        <div className="w-full h-[260px] relative">
            <Image
                  className="w-full h-full object-cover scale-90 hover:scale-100 transition-transform duration-300"
                  width={300}
                  height={300}
                  src={image}
                  alt="productImage"
                />
        <div className="w-12 h-24 absolute bottom-10 right-0 border-[1px] border-gray-400 bg-white rounded-md 
        flex flex-col translate-x-20 group-hover:translate-x-0 transition-transform duration-300">
        
            <span className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl 
            bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                <HiShoppingCart/></span>
            <span 
             onClick={() =>
                dispatch(
                  addToFavorite({
                    _id: _id,
                    brand: brand,
                    category: category,
                    description: description,
                    image: image,
                    isNew: isNew,
                    oldPrice: oldPrice,
                    price: price,
                    title: title,
                    quantity: 1,
                  })
                )
              }
            className="w-full h-full border-b-[1px] border-b-gray-400 flex items-center justify-center text-xl 
            bg-transparent hover:bg-amazon_yellow cursor-pointer duration-300">
                <FaHeart/></span>
        </div>
{/* FormattedPrice ---------- -------------------------------------------------------- */}
{isNew && (
        <p className="absolute top-0 right-0 text-amazon_blue font-medium text-xs tracking-wide animate-bounce">
                  {/* !save {oldPrice - price}  */}
                  !save <FormattedPrice amount={oldPrice - price} />

                </p>
              )}
        </div>
{/* FormattedPrice ---------- -------------------------------------------------------- */}

{/*  ---------- -------------------------------------------------------- */}
<hr />
<div  className="px-4 py-3 flex flex-col gap-1">

<p className="text-xs text-gray-500 tracking-wide">{category}</p>

<p className="text-base font-medium">{title}</p>

<p className="flex items-center gap-2">
                <span className="text-sm line-through">
                  <FormattedPrice amount={oldPrice} />
                </span>
                <span className="text-amazon_blue font-semibold">
                  <FormattedPrice amount={price} />
                </span>
</p>

{/* Description---------- */}
<p className="text-xs text-gray-600 text-justify">
        {description.substring(0, 120)}
</p>

{/* Add to cart Button------- */}

<button 
     onClick={() =>
                  dispatch(
                    addToCart({
                      _id: _id,
                      brand: brand,
                      category: category,
                      description: description,
                      image: image,
                      isNew: isNew,
                      oldPrice: oldPrice,
                      price: price,
                      title: title,
                      quantity: 1,
                    })
                  )
                }
className="h-10 font-medium bg-amazon_blue text-white rounded-md hover:bg-amazon_yellow hover:text-black duration-300 mt-2" >
Add to Cart 
</button>

</div>
{/*  ---------- -------------------------------------------------------- */}


{/*  ---------- -------------------------------------------------------- */}
        
        </div>
    )
    )
    }
    </div>
    );
    };

export default Products;
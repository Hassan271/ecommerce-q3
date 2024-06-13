import React from 'react'

// catch product data by props 
const Products = ({productData}: any) => {

    // to check by console --------------
// console.log(productData);

return (
    <div    className="w-full px-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
    {
    productData.map((item) =>
    (
        <p>{item.title}</p>
    ) 
    )    
    }
    </div>
  )
}

export default Products

import Image from "next/image";
import { Inter } from "next/font/google";
import Banner from "@/components/Banner";
import Products from "@/components/Products";


// import Header from "@/components/header/Header";
// import BottomHeader from "@/components/header/BottomHeader";
// import Footer from "@/components/Footer";

interface Props {
  productData: ProductProps;
}

export default function Home({ productData }: Props ) {
// console to check product data in console   
// console.log(productData);

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(setAllProducts({ allProducts: productData }));
  // }, [productData]);

  return (
   <main>
    {/* Banner Start ========================================================= */}
    <div className="max-w-screen-2xl mx-auto">
        <Banner />
        <div className="relative md:-mt020 lgl:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products productData={productData} />
        </div>
    </div>
    {/* Banner End ========================================================= */}

    {/* <Header />
    <BottomHeader/>
    <div  className="py-10 bg-gray-300"></div>
    <Footer/> */}
    
   </main>
  );
}

// for Products Section we use 
// (SSR for data fetching from Next js https://nextjs.org/docs/pages/building-your-application/rendering/server-side-rendering)  

export const getServerSideProps = async () => {
  // offline Api for products  
  const res = await fetch("https://fakestoreapiserver.reactbd.com/tech");
  const productData = await res.json();
  return { props: { productData } };
};

import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
// CSS for Slider Section    https://www.npmjs.com/package/react-responsive-carousel 
import "react-responsive-carousel/lib/styles/carousel.min.css";
// for store 
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
// store persist Redux
import { PersistGate } from 'redux-persist/integration/react' 

export default function App({ Component, pageProps }: AppProps) 
{
  return (

// src\store\store.ts     store + provider    
<Provider store={store}>
{/* persist ------------------ */}
<PersistGate persistor={persistor} loading={null}>
<div className="text-bodyFont">
  {/* RootLayout -------------- */}
<RootLayout>
  <Component {...pageProps} />
</RootLayout>
</div>
</PersistGate>
</Provider>
  );
}

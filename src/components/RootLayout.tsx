import React, { ReactElement } from 'react';
import Header from './header/Header';
import Footer from './Footer';
import BottomHeader from './header/BottomHeader';

interface Props{
  children: ReactElement;
}

const RootLayout = ({children}:Props) => {
  return 
  (
    <>
     <Header/>
     <BottomHeader/>
     {children}
     <Footer/>
    </>
  );
};

export default RootLayout;
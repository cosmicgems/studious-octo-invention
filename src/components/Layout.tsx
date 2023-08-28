import React, { ReactNode, useEffect} from 'react'
import ConsultationBanner from './Hero/ConsultationBanner';
import Footer from './Footer';
import Navbar from './Navbar';
interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <>
      <div className='min-h-screen w-screen flex flex-col'>
        <ConsultationBanner />
        <Navbar />
        <main className='flex flex-col grow'>{children}</main>
        <Footer />
      </div>   
    </>

  )
}

export default Layout
import React, { ReactNode, useEffect} from 'react'
import ConsultationBanner from './Hero/ConsultationBanner';
import Navbar from './Navbar';
interface LayoutProps {
  children: ReactNode;
}


const Layout: React.FC<LayoutProps> = ({children}) => {

  return (
    <>
      <div className='w-screen'>
        <ConsultationBanner />
        <Navbar />
        <main className=''>{children}</main>
      </div>   
    </>

  )
}

export default Layout
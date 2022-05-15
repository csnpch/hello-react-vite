import React from 'react';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Overlay from './Overlay';


function Layout({ children_components }) {
  return (
    <>
      <div className='duration-300'>
        <div className='w-full h-screen'>
          <Navbar />
          <main>{children_components}</main>
          {/* <Footer /> */}
        </div>
        <Sidebar />
        <Overlay />
      </div>
    </>
  )
}


export default Layout;

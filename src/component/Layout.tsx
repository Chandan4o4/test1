import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <div><Navbar /></div>
    <div style={{display:'flex'}}>
      <Sidebar />
      <main style={{backgroundColor:'green', width:'100%'}}>{children}</main>
    </div>
    </>
  );
};

export default Layout;

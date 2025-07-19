// import React from 'react';
// import { Outlet } from 'react-router';
// import Navbar from '../components/Navbar';
// import Footer from '../components/Footer';

// const MyLayouts = () => {
//     return (
//         <div>
//             <Navbar></Navbar>
//             <Outlet></Outlet>
//             <Footer></Footer>
//         </div>
//     );
// };

// export default MyLayouts;



import React, { useState, useEffect, useRef } from 'react';

import {  Outlet, useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../pages/Loader';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MyLayouts = () => {
  const [loading, setLoading] = useState(true); 
  const location = useLocation();
  const prevPath = useRef(location.pathname);

  const routesWithLoader = ['/', '/profile', '/dashboard', '/service', '/*', '/notfound'];

  const shouldShowLoader = (pathname) => {
    return routesWithLoader.some(route =>
      pathname === route || pathname.startsWith(route + '/') || (route === '*' && pathname === '/notfound')
    );
  };

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  
  useEffect(() => {
    const from = prevPath.current;
    const to = location.pathname;

    const fromNeedsLoader = shouldShowLoader(from);
    const toNeedsLoader = shouldShowLoader(to);

    if (from !== to && (fromNeedsLoader || toNeedsLoader)) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 1500);

      prevPath.current = to;

      return () => clearTimeout(timer);
    } else {
      prevPath.current = to;
    }
  }, [location.pathname]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={3000} />
      {loading ? (
        <Loader />
      ) : (
        <div className='poppins flex flex-col min-h-screen'>
          <Navbar></Navbar>
          <div className="flex-1 bg-white">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      )}
    </>
  );
};

export default MyLayouts;

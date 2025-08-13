
import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { MdMenu, MdClose } from "react-icons/md";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GiFoodTruck } from 'react-icons/gi';


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out!");
        navigate("/login");
      })
      .catch(() => {
        toast.error("Logout Failed!");
      });
  };

  return (
    <>
      <nav className="bg-orange-400 drop-shadow-2xl px-4 lg:px-28 relative text-white">
        <div className="flex justify-between items-center py-6 container mx-auto">

          <div className="flex items-center gap-2">
            <h1 className="text-5xl"><GiFoodTruck />
            </h1>
            <h1 className="text-3xl font-bold">ShareBite</h1>
          </div>

          <div className="hidden lg:flex gap-6">
            <NavLink to="/" className={({ isActive }) =>
              isActive ? " text-xl border-b-2 border-white" : "text-xl"
            }>
              Home
            </NavLink>
            <NavLink to="/availablefoods" className={({ isActive }) =>
              isActive ? " text-xl border-b-2 border-white" : "text-xl"
            }>
              Available Foods
            </NavLink>
            <NavLink to="/blogs" className={({ isActive }) =>
              isActive ? " text-xl border-b-2 border-white" : "text-xl"
            }>
              Blogs
            </NavLink>

            {user && (
              <>
                <NavLink to="/addfoods" className={({ isActive }) =>
                  isActive ? " text-xl border-b-2 border-white" : "text-xl"
                }>
                  Add Foods
                </NavLink>
                <NavLink to="/managefoods" className={({ isActive }) =>
                  isActive ? " text-xl border-b-2 border-white" : "text-xl"
                }>
                  Manage my Foods
                </NavLink>
                <NavLink to="/myrequests" className={({ isActive }) =>
                  isActive ? " text-xl border-b-2 border-white" : "text-xl"
                }>
                  My Requested Foods
                </NavLink>
              </>
            )}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            {user ? (
              <>
                <div className="relative group cursor-pointer">
                  <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="user" />

                  <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1 text-sm bg-gray-700 text-white px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition">{user.displayName}</span>
                </div>
                <button className="btn border border-white btn-neutral text-sm px-10 py-5 text-white bg-black
                hover:bg-orange-800 transition-colors rounded-sm " onClick={handleLogout}>Logout</button>




              </>
            ) : (
              <NavLink to="/login" className=" btn shadow-2xl border border-white btn-neutral text-sm  px-10 py-5 rounded-sm bg-white text-black hover:bg-orange-800 transition-colors ">Login / register</NavLink>
            )}
          </div>


          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="lg:hidden px-4 pb-4 bg-gray-100 rounded-2xl text-black space-y-4 text-center rounded-b-lg">
            <NavLink to="/" onClick={() => setMenuOpen(false)} className="block text-lg">Home</NavLink>
            <NavLink to="/availablefoods" onClick={() => setMenuOpen(false)} className="block text-lg">Available Foods</NavLink>

            {user && (
              <>
                <NavLink to="/addfoods" onClick={() => setMenuOpen(false)} className="block text-lg">Add Foods</NavLink>
                <NavLink to="/managefoods" onClick={() => setMenuOpen(false)} className="block text-lg">Manage my foods</NavLink>
                <NavLink to="/myrequests" onClick={() => setMenuOpen(false)} className="block text-lg">My requested Foods</NavLink>
              </>
            )}
            {user ? (
              <button onClick={() => { handleLogout(); setMenuOpen(false); }} className="btn btn-sm btn-outline w-full ">Logout</button>
            ) : (
              <NavLink to="/login" onClick={() => setMenuOpen(false)} className="btn btn-sm btn-neutral w-full">Login</NavLink>
            )}
          </div>
        )}
      </nav>

      <ToastContainer position="top-right" />
    </>
  );
};

export default Navbar;

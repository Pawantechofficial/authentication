import Link from "next/link";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Navbar = () => {
  return (
    <>
      <ToastContainer />
      <header className="bg-zinc-900 text-white">
        <nav className="w-full py-4 md:w-[80%] mx-auto flex items-center gap-4 justify-between">
          <Link href={"/"}>LOGO</Link>
          <ul className="flex items-center gap-4">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/register"}>Register</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;

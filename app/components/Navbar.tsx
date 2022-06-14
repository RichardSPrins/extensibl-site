import { Link } from "@remix-run/react";
import * as React from "react";
import { FaArrowRight, FaBars } from "react-icons/fa";
const LINKS = [
  { name: "About", button: false, path: "/about-me" },
  { name: "Services", button: false, path: "/services" },
  // { name: "Products", button: false, path: "/products" },
  { name: "Blog", button: false, path: "/blog" },
  { name: "Book A Call", button: false, path: "/contact" },
  { name: "Log In", button: true, path: "/login" },
];

export default function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);
  return (
    <>
      <div className="h-32 w-full bg-white">
        <div className="container mx-auto flex h-full items-center justify-between px-4 md:p-0">
          <Link onClick={() => setShowMobileMenu(false)} to="/">
            <img src="images/extensibl-logo.png" />
          </Link>
          <div className="hidden items-center md:flex">
            {LINKS.map((link) => {
              if (link.button) {
                return (
                  <Link to={link.path}>
                    <button className="ml-6 rounded bg-orange-500 py-2 px-4 font-semibold text-white shadow hover:bg-orange-400">
                      {link.name} <FaArrowRight className="mb-1 inline" />
                    </button>
                  </Link>
                );
              } else {
                return (
                  <Link to={link.path}>
                    <p className="ml-6 cursor-pointer hover:underline">
                      {link.name}
                    </p>
                  </Link>
                );
              }
            })}
          </div>
          <div
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="flex items-center justify-center rounded-lg p-4 text-2xl hover:bg-gray-100 md:hidden"
          >
            <FaBars />
          </div>
        </div>
      </div>
      <div
        className={` z-10 mb-8 w-full pb-6 ${
          showMobileMenu ? "block" : "hidden"
        } md:hidden`}
      >
        {LINKS.map((link) => {
          if (link.button) {
            return (
              <Link onClick={() => setShowMobileMenu(false)} to={link.path}>
                <div className="w-full bg-white px-6">
                  <button className="w-full rounded bg-orange-500 py-2 px-4 font-semibold text-white shadow hover:bg-orange-400">
                    {link.name} <FaArrowRight className="mb-1 inline" />
                  </button>
                </div>
              </Link>
            );
          } else {
            return (
              <Link onClick={() => setShowMobileMenu(false)} to={link.path}>
                <div className="w-full bg-white hover:bg-gray-100">
                  <p className="ml-6 cursor-pointer p-4 hover:underline">
                    {link.name}
                  </p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  );
}

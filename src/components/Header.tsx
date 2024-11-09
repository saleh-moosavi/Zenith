import { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import { BiMenu } from "react-icons/bi";
import Button from "./Button";

export default function Header() {
  const [sideBar, setSideBar] = useState<boolean>(false);
  const [windowSize, setWindowSize] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener("resize", handleSize);
    return () => {
      window.removeEventListener("resize", handleSize);
    };
  }, []);

  if (windowSize > 769) {
    return (
      <nav className="flex justify-around font-bold py-5 fixed top-0 right-0 left-0 shadow-md backdrop-blur-md">
        <a href="#footer">Agency</a>
        <ul className="flex gap-x-5 md:gap-x-7 lg:gap-x-10 hover:*:text-orange-400 *:transition-all *:duration-300 *:cursor-pointer">
          <li>Home</li>
          <li>About us</li>
          <li>Services</li>
          <li>Contact us</li>
          <li>Blog</li>
        </ul>
        <Button>Sign up</Button>
      </nav>
    );
  } else {
    return (
      <nav className="flex justify-between items-center px-5 font-bold py-5 fixed top-0 right-0 left-0 shadow-md backdrop-blur-md">
        <p className="cursor-pointer">Agency</p>
        <BiMenu
          className="w-6 h-6 cursor-pointer hover:scale-110 transition-all duration-300"
          onClick={() => setSideBar(!sideBar)}
        />

        {/* Sidebar */}
        <div
          className={`fixed top-0 bottom-0 right-0 h-screen w-1/2 ${
            sideBar ? "translate-x-0" : "translate-x-full"
          } bg-stone-100 p-10 drop-shadow-lg transition-all duration-300`}
        >
          <CgClose
            className="w-5 h-5 cursor-pointer hover:text-red-600 transition-all duration-300"
            onClick={() => setSideBar(!sideBar)}
          />
          <ul className="flex flex-col gap-y-5 my-5 hover:*:text-orange-400 *:transition-all *:duration-300 *:cursor-pointer">
            <li>Home</li>
            <li>About us</li>
            <li>Services</li>
            <li>Contact us</li>
            <li>Blog</li>
          </ul>
          <Button>Sign up</Button>
        </div>
      </nav>
    );
  }
}

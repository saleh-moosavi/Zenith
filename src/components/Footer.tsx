import { FaInstagram, FaTelegram, FaWhatsapp } from "react-icons/fa";
import FooterList from "./FooterList";

export default function Footer() {
  return (
    <div id="footer" className="relative w-screen bg-orange-300/50 -z-10">
      <div className="bg-orange-500 w-3/4 absolute -top-6 right-0 left-0 mx-auto flex justify-between p-2 rounded-xl items-center">
        <h2 className="text-white font-bold">Ready to get started ?</h2>
        <button className="px-3 py-1 text-white text-sm font-semibold border-2 border-white shadow-md shadow-orange-200 hover:shadow-white rounded-md transition-all duration-300 block cursor-pointer">
          Contact us
        </button>
      </div>

      <article className="grid grid-cols-3 justify-items-center px-5 py-20">
        <div>
          <h2 className="text-lg font-bold text-center mb-2">Zenith</h2>
          <ul className="flex justify-between gap-x-2 *:*:fill-orange-500 *:*:stroke-orange-500 *:*:cursor-pointer">
            <li>
              <FaWhatsapp className="size-6" />
            </li>
            <li>
              <FaTelegram className="size-6" />
            </li>
            <li>
              <FaInstagram className="size-6" />
            </li>
          </ul>
        </div>
        <FooterList />
        <FooterList />
      </article>

      <div className="w-full flex justify-center">
        <div className="bg-orange-500 w-2/3 text-center rounded-t-full">
          <p className="z-20 text-white font-bold select-none">
            2024 All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}

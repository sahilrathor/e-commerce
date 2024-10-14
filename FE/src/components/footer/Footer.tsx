import { useAppInfo } from "../../stores/app-info"
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const Footer = () => {
  const { name } = useAppInfo()
  return (
    <div className='w-full border-t-[1px] px-12 py-10 border-slate-800/10 center-items justify-evenly gap-10'>
      {/* Brand */}
      <div className="flex flex-col">
        <span className='text-3xl font-bold text-emerald-500 mb-2 drop-shadow-lg'>{name}</span>
        <p className='text-sm font-semibold text-slate-800/50'>Shop smart, live better.</p>
        <p className='text-sm font-semibold text-slate-800/50'>Bringing the best to your doorstep</p>
        <button className='w-44 text-lg text-white mt-5 bg-[#0d1117] border-[1px] border-slate-800/10 rounded-full py-2'>
          Github
        </button>
      </div>

      {/* Links */}
      <div className="links">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/categories">Categories</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
      </div>

      {/* Socials */}
      <div className="socials">
        <div className="w-32 center-items items-start flex-col gap-2">
          {/* icon 1 */}
          <div className="group flex gap-1 transition-all duration-300 cursor-pointer">
            <a href="#"
              className="bg-[#0077b5] rounded-lg p-1 text-white hover:bg-[#0077b5]/90 transition-all duration-100 "
            >
              <FaLinkedinIn size={20} className="" />
            </a>
            <span className="text-[#0077b5] font-semibold w-0 group-hover:w-full transition-all duration-300 overflow-hidden flex ">
              LinkedIn <MdArrowOutward size={14} />
            </span>
          </div>

          {/* icon 2 */}
          <div className="group flex gap-1 transition-all duration-300 cursor-pointer">
            <a href="#"
              className="bg-[#181717] rounded-lg p-1 text-white hover:bg-[#181717]/80 transition-all duration-100"
          >
              <FaGithub size={20} />
            </a>
            <span className="text-[#181717] font-semibold w-0 group-hover:w-full transition-all duration-300 overflow-hidden flex ">
              Github <MdArrowOutward size={14} />
            </span>
          </div>

          {/* icon 3 */}
          <div className="group flex gap-1 transition-all duration-300 cursor-pointer">
            <a href="#"
              className="bg-[#f33b78] rounded-lg p-1 text-white hover:bg-[#f33b78]/80 transition-all duration-100"
          >
            <FaInstagram size={20} />
          </a>
            <span className="text-[#f33b78] font-semibold w-0 group-hover:w-full transition-all duration-300 overflow-hidden flex ">
              Instagram <MdArrowOutward size={14} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer


// "Shop smart, live better."
// "Your one-stop shop for everything you love."
// "Where style meets convenience."
// "Quality products, unbeatable prices."
// "Find it. Love it. Buy it."
// "Bringing the best to your doorstep."
// "Shopping made simple."
// "Discover the difference in every purchase."
// "Experience the joy of effortless shopping."
// "Your satisfaction, our priority."
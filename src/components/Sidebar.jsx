import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {FcMenu} from "react-icons/fc"
const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false);
    const [showProfile, SetshowProfile] = useState(false);
  const navigate =  useNavigate()
  const HandleContent= (link)=>{
    navigate(link)
  }
    
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <nav className="fixed  top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="px-3 py-3 lg:px-5 lg:pl-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center justify-start">
              <button
                onClick={toggleSidebar}
                data-drawer-target="logo-sidebar"
                data-drawer-toggle="logo-sidebar"
                aria-controls="logo-sidebar"
                type="button"
                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              >
                <FcMenu size={20}/>
              </button>
              <p className="flex gap-x-2 items-center ml-2 md:mr-24">
                <svg
                  id="logo-35"
                  className="h-6"
                  viewBox="0 0 50 39"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                    className="ccompli1"
                    fill="#007AFF"
                  ></path>{" "}
                  <path
                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                    class="ccustom"
                    fill="#312ECB"
                  ></path>{" "}
                </svg>
                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">

                  <p className="bg-gradient-to-r  from-green-300 via-blue-200 to-purple-500 bg-clip-text text-xl font-bold text-transparent text-center my-1 max-md:text-xl">Web Componentify</p>
                </span>
              </p>
            </div>
           
          </div>
        </div>
      </nav>

      <aside
        onClick={toggleSidebar}
        className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700`}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <ul className="space-y-2 font-medium">
          
          <li>
          <button onClick={()=>{HandleContent("/")}} className=" bg-gradient-to-t  from-green-500 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span className="px-1 whitespace-nowrap">Home</span>
          </button>
        </li>
            <li>
              <button onClick={()=>{HandleContent('/button')}} className="  bg-gradient-to-t  from-green-500 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="px-1 whitespace-nowrap">Button</span>
              </button>
            </li>
            <li>
              <button onClick={()=>{HandleContent('/Modal')}} className="bg-gradient-to-t  from-green-200 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="px-1 whitespace-nowrap">  Modal</span>
              </button>
            </li>{" "}
            <li>
              <button onClick={()=>{HandleContent('Footer')}} className="bg-gradient-to-t  from-green-200 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="px-1 whitespace-nowrap">Footer</span>
              </button>
            </li>{" "}
            <li>
              <button onClick={()=>{HandleContent('/avatar')}} className="bg-gradient-to-t  from-green-200 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <span className="px-1 whitespace-nowrap">Avatar</span>
              </button>
            </li>{" "}
           
            <li>
            <button onClick={()=>{HandleContent('card')}} className="bg-gradient-to-t  from-green-200 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-700 group">
              <span className="px-1 whitespace-nowrap">Card</span>
            </button>
          </li>
          <li>
          <button onClick={()=>{HandleContent('/alert')}} className="bg-gradient-to-t  from-green-200 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <span className="px-1 whitespace-nowrap">Alert</span>
          </button>
        </li>
        <li>
        
        <button onClick={()=>{HandleContent('/badge')}} className="bg-gradient-to-t  from-green-200 via-blue-200 to-purple-100 bg-clip-text tracking-wider font-bold text-transparent text-center my-1 w-full flex items-center p-2  hover:bg-gray-100 dark:hover:bg-gray-700 group">
          <span className="px-1 whitespace-nowrap">Badge</span>
        </button>
      </li>
          </ul>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;



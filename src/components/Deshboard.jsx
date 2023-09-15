import img from "../components/images/logo.jpeg";
import img1 from "../components/images/folder.png";
import { NavLink } from "react-router-dom";
const Deshboard = () => {
  return (
    <>
      {/* <div classNameName='inline-block'>
        <img src={img} alt="" />
        <ul classNameName="flex gap-5">
          <li>project 1</li>
          <li>project 2</li>
          <li>project3</li>
          <li>project4</li>
          <li>project5</li>
        </ul>
      </div> */}

      <aside className="ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]">
        <div>
          <div className="px-6 py-2">
            <img src={img} className="w-[150px] h-[100px]" alt="tailus logo" />
          </div>

          <ul className="space-y-2 tracking-wide mt-8">
            <li>
              <NavLink to="/display">
                <div className='flex click relative px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <img src={img1} alt="" className="h-8" />
                  <span className="group-hover:text-gray-700">
                    Month and Date Project
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/random">
                <div className='flex  click relative px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <img src={img1} alt="" className="h-8" />
                  <span className="group-hover:text-gray-700">
                    Random number project
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/api">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <img src={img1} alt="" className="h-8" />
                  <span className="group-hover:text-gray-700">Api calling</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/array">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <img src={img1} alt="" className="h-8" />
                  <span className="group-hover:text-gray-700">Array Data</span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/storage">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <img src={img1} alt="" className="h-8" />
                  <span className="group-hover:text-gray-700">
                    Name find from array
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/local">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <img src={img1} alt="" className="h-8" />
                  <span className="group-hover:text-gray-700">
                    Local & Session storage
                  </span>
                </div>
              </NavLink>
            </li>
            <li>
              <NavLink to="/quiz">
                <div className='flex relative click px-4 py-2 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"'>
                  <img src={img1} alt="" className="h-8" />
                  <span className="group-hover:text-gray-700">
                    Quiz App
                  </span>
                </div>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
        <div className="sticky z-10 top-0 h-16 border-b bg-white lg:py-2.5">
          <div className="px-6 flex items-center justify-between space-x-4 2xl:container">
            <h5 hidden className="text-2xl text-gray-600 font-medium lg:block">
              Dashboard
            </h5>
            <button className="w-12 h-16 -mr-2 border-r lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 my-auto"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className="px-6 pt-6 2xl:container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="md:col-span-2 lg:col-span-1">
              <NavLink to="/display">
                <div className="h-25  click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  <img src={img1} alt="" className="h-8 pr-2" />
                  Month and Date Project
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/random">
                <div className="h-25 click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  <img src={img1} alt="" className="h-8 pr-2" />
                  Random number project
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/api">
                <div className="h-25  click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  <img src={img1} alt="" className="h-8 pr-2" />
                  Api Calling
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/array">
                <div className="h-25 click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  <img src={img1} alt="" className="h-8 pr-2" />
                  Array Data
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/storage">
                <div className="h-25 click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  <img src={img1} alt="" className="h-8 pr-2" />
                  Name find from array
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/local">
                <div className="h-25 click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  <img src={img1} alt="" className="h-8 pr-2" />
             Local & Session storage
                </div>
              </NavLink>
            </div>
            <div>
              <NavLink to="/quiz">
                <div className="h-25 click py-8 px-6 space-y-6 rounded-xl border border-gray-200 bg-white flex">
                  <img src={img1} alt="" className="h-8 pr-2" />
             Quiz App
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Deshboard;

import { Link, useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { LuChevronLeft, LuChevronRight, LuHome } from 'react-icons/lu';

const BreadCrumb = ({ currentPageName, links }) => {
  const navigate = useNavigate()
  
    return (
        <div className="flex justify-between mb-5 gap-2  border-y py-4">
          <nav className="flex " aria-label="Breadcrumb">
            <ol className="flex items-center  space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li className="flex items-center   ">
                <Link
                  to="/dashboard"
                  className="inline-flex items-center justify-center gap-1  font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                >
                  <span><LuHome className='text-xs ' /></span>
                  <p className='text-xs'>Home</p>
                </Link>
              </li>
              {links &&
                links.map((link, index) => (
                  <li key={index} className="inline-flex items-center  ">
                    <Link
                      to={link.path}
                      className="inline-flex items-center justify-center gap-1 text-xs font-medium text-gray-400 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                    >
                      <MdKeyboardArrowRight />
                      {link.name}
                    </Link>
                  </li>
                ))}
              <li aria-current="page">
                <div className="flex items-center">
                  <MdKeyboardArrowRight />
                  <span className="ms-1 text-xs font-bold  md:ms-2 dark:text-gray-400">
                    {currentPageName}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className='flex items-center'>
          <button
              type="button"
              onClick={() => navigate(-1)} 
              className="size-7 flex items-center justify-center text-sm font-medium  bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
             <LuChevronLeft />
            </button>
            <button
              type="button"
              onClick={() => navigate(1)}
              className="size-7 flex items-center justify-center text-sm font-medium  bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
             <LuChevronRight />
            </button>
          </div>
        </div>
      );
  
}

export default BreadCrumb
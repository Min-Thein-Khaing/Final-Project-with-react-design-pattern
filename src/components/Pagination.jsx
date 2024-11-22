// import React from "react";
// import { HiArrowLeft, HiArrowRight } from "react-icons/hi2";
// import { LuChevronLeft, LuChevronRight, LuChevronsLeft, LuChevronsRight } from "react-icons/lu";

// const Pagination = ({
//   links: { prev, next,last,first } ={prev: null, next: null,last: null,first: null},
//   meta: { from, to, total, links ,current_page,last_page } ={from: 0, to: 0, total:0, links: [],current_page:1,last_page:1},
//   updateFetchUrl,
// }) => {
  
//   const handlePrevBtn = async () => {
//     updateFetchUrl(prev);
//   };
//   const handleNextBtn = async () => {
//     updateFetchUrl(next);
//   };
  
//   return (
//     <div className="flex mt-3 mx-6 justify-between  items-center">
//       {/* Help text */}
//       <span className="text-sm select-none text-gray-700 dark:text-gray-400">
//         Showing {from} to {to} of {total} Entries
//       </span>
//       {/* Buttons */}
//       <div className="inline-flex  xs:mt-0">
//       <span className="text-sm select-none flex gap-2 text-gray-700 mt-3 me-3 dark:text-gray-400">
//         Page <p className="font-bold  ">{current_page ?? 0}</p>  of <p className="font-bold ">{last_page ?? 0}</p> 
//       </span>
//         {/* <button
//         onClick={handlePrevBtn}
//           disabled={!prev}
//           className="size-10 flex items-center justify-center border border-gray-300 rounded-s-lg text-gray-600 hover:bg-gray-100 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 scale-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50 duration-300 hover:text-black text-sm font-bold"
//         >
//           <HiArrowLeft />
//         </button>
//         <button
//         onClick={handleNextBtn}
//           disabled={!next}
//           className="size-10 flex items-center justify-center border border-gray-300 rounded-e-lg text-gray-600 hover:bg-gray-100 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 scale-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50 duration-300 hover:text-black text-sm font-bold"
//         >
//           <HiArrowRight />
//         </button> */}

//         {/* {links.map((link) => {
//           return (
//             <button
//               key={link.label}
//               onClick={() => {
//                 updateFetchUrl(link.url);
//               }}
//               disabled={!link.url}
//               className={`size-10 flex items-center ${link.active ? "bg-blue-500 text-white" : ""} justify-center border-y first:border-l last:border-e border-gray-300 text-gray-600 first:rounded-s-lg  last:rounded-e-lg focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 scale-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50 duration-300 hover:text-black text-sm font-bold `}
//             >
//               {link.label === "&laquo; Previous"? <HiArrowLeft />: link.label === "Next &raquo;"? <HiArrowRight />: link.label}
//             </button>
//           );
//         })} */}
//         <button
//           disabled={!prev}
//         onClick={()=>{updateFetchUrl(prev)}}
//           className="size-10 flex items-center justify-center border border-gray-300 rounded-s-lg text-gray-600 hover:bg-gray-100 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 scale-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50 duration-300 hover:text-black text-sm font-bold"
//         >
//           <LuChevronLeft />
//         </button>
//         <button
//           disabled={!first}
//         onClick={()=>{updateFetchUrl(first)}}
//           className="size-10 flex items-center justify-center border border-gray-300  text-gray-600 hover:bg-gray-100 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 scale-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50 duration-300 hover:text-black text-sm font-bold"
//         >
//           <LuChevronsLeft />
//         </button><button
//           disabled={!last}
//         onClick={()=>{updateFetchUrl(last)}}
//           className="size-10 flex items-center justify-center border border-gray-300  text-gray-600 hover:bg-gray-100 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 scale-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50 duration-300 hover:text-black text-sm font-bold"
//         >
//           <LuChevronsRight />
//         </button><button
//           disabled={!next}
//         onClick={()=>{updateFetchUrl(next)}}
//           className="size-10 flex items-center justify-center border border-gray-300 rounded-e-lg text-gray-600 hover:bg-gray-100 focus:ring-1 focus:ring-gray-300 focus:ring-offset-2 scale-100 active:scale-95 disabled:pointer-events-none disabled:opacity-50 duration-300 hover:text-black text-sm font-bold"
//         >
//           <LuChevronRight />
//         </button>
//       </div>

//     </div>
//   );
// };

// export default Pagination;


import React from "react";
import {
  LuChevronLeft,
  LuChevronRight,
  LuChevronsLeft,
  LuChevronsRight,
} from "react-icons/lu";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  links: { prev, next, first, last } = {
    prev: null,
    next: null,
    first: null,
    last: null,
  },
  meta: { total, to, from, links, per_page, current_page, last_page, path } = {
    total: 0,
    to: 0,
    from: 0,
    per_page: 0,
    current_page: 0,
    last_page: 0,
    links: [],
    path: "",
  },
  updateFetchUrl,
}) => {
  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;
  const pageLimits = [5, 10, 20, 50, 100];

  const handleRowLimitSelect = (e) => {
    setParams({ page: 1, limit: e.target.value });
    updateFetchUrl(`${path}?page=1&limit=${e.target.value}`);
  };

  return (
    <div className="flex justify-between mt-5 items-center ">
      <span className="text-sm text-gray-700 dark:text-gray-400">
        Showing <b>{from ?? 0}</b> to <b>{to ?? 0}</b> of <b>{total ?? 0}</b>{" "}
        Entries
      </span>

      <div className=" flex gap-3 items-center">
        <div className=" flex items-center gap-2">
          <label
            htmlFor="countries"
            className="block text-gray-700 text-sm text-nowrap dark:text-white"
          >
            Rows per page
          </label>
          <select
            onChange={handleRowLimitSelect}
            className="flex items-center justify-center h-10 text-sm font-medium border-y border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            value={currentLimit}
          >
            {pageLimits.map((limit, index) => (
              <option key={index} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>

        <span className="text-sm text-gray-700 dark:text-gray-400">
          Page <b>{current_page ?? 0}</b> of <b>{last_page ?? 0}</b>
        </span>
        <div className="inline-flex">
          <button
            disabled={!prev}
            onClick={() => updateFetchUrl(prev)}
            className={`
              flex items-center justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronLeft />
          </button>
          <button
            disabled={!first}
            onClick={() => updateFetchUrl(first)}
            className={`
              flex items-center justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronsLeft />
          </button>
          <button
            disabled={!last}
            onClick={() => updateFetchUrl(last)}
            className={`
              flex items-center justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronsRight />
          </button>
          <button
            disabled={!next}
            onClick={() => updateFetchUrl(next)}
            className={`
              flex items-center justify-center size-10 text-sm font-medium border-y first:border-l last:border-r border-gray-200 first:rounded-l-lg last:rounded-r-lg dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none`}
          >
            <LuChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
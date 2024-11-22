import React from 'react'
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const SortTable = ({children,handleSort ,sort_by ,align}) => {
  return (
    <div className={`flex gap-1 j items-center ${align === " right"? "justify-end":"justify-start"}`}>
                  <span className="flex flex-col  ">
                    <span>
                      <button onClick={handleSort.bind(null,{
                        sort_by:sort_by,sort_direction:"asc"
                      })} className=" border rounded-full  hover:text-white hover:bg-black">
                        <LuChevronUp />
                      </button>
                    </span>
                    <span>
                      <button onClick={handleSort.bind(null,{
                        sort_by:sort_by,sort_direction:"desc"
                      })} className=" border rounded-full  hover:text-white hover:bg-black">
                       <LuChevronDown />
                      </button>
                    </span>
                  </span>
                  <span>{children}</span>
                </div>
  )
}

export default SortTable
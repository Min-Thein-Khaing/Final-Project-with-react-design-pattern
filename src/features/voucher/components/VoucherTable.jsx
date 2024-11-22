import React, { useEffect, useRef, useState } from "react";

import { HiSearch, HiX } from "react-icons/hi";
import { HiPlus } from "react-icons/hi2";
import useSWR from "swr";


import { throttle, debounce } from "lodash";
// import Pagination from "./Pagination";
import useCookie from "react-use-cookie";

import Pagination from "../../../components/Pagination";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import { urlToParamObject } from "../../../utils/url";
import SortTable from "../../../components/SortTable";
import VoucherLoader from "./VoucherLoader";
import VoucherEmpty from "./VoucherEmpty";
import VoucherListRow from "./VoucherListRow";
import { fetchVouchers } from "../../../services/voucher";


const ProductTable = () => {
  const [token] = useCookie("my_token");

  const searchRef = useRef()
  const location = useLocation();
  const [param, setParam] = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + `/vouchers` + location.search
  );

  useEffect(() => {
    if(param.get("q")){
      searchRef.current.value = param.get("q");
    }
  },[])
  const updateFetchUrl = (url) => {
    
    setParam(urlToParamObject(url));
    setFetchUrl(url);
  };
  const { data, isLoading, error } = useSWR(fetchUrl, fetchVouchers);
  // if(isLoading) return <div>Loading...</div>
  // console.log(data)
  //throttle and debounce
  const handleSearch = debounce((e) => {
    if(e.target.value){
      setParam({q:e.target.value});
      setFetchUrl(import.meta.env.VITE_API_URL + `/vouchers?q=${e.target.value}`);
    }else{
      setParam({});
      setFetchUrl(import.meta.env.VITE_API_URL + `/vouchers`);
    }
  });
  

  const handleSort = (data) => {
    const sortParams  = new URLSearchParams(data).toString();
    setParam(sortParams)
    setFetchUrl(import.meta.env.VITE_API_URL + `/vouchers?${sortParams}`)
  }


  return (
    <div>
      <div className=" flex flex-wrap justify-between  mb-3">
        <div className="">
          <div className="relative mb-4">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
              <HiSearch className="w-4 h-4 text-stone-500 dark:text-stone-400" />
            </div>
            <input
            ref={searchRef}
              type="text"
              onChange={handleSearch}
              className="bg-gray-50 border border-gray-300 text-stone-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search Product"
            />
          </div>
        </div>
        <div className="">
          <Link
            to="/dashboard/product-create"
            className="text-white flex justify-center items-center gap-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Sale
            <HiPlus />
          </Link>
        </div>
      </div>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-stone-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              
              <th scope="col" className="px-6 py-3 ">
                Invoice_ID
              </th>
              <th scope="col" className="px-6 py-3 ">
              <SortTable handleSort={handleSort} sort_by="customer_name">Customer</SortTable>

              </th>
              <th scope="col" className="px-6 py-3 text-end">
                <SortTable handleSort={handleSort} align={"right"} sort_by="tax">Tax</SortTable>
              </th>

              <th scope="col" className="px-6 py-3 text-end">
                <SortTable handleSort={handleSort}  sort_by="total">Total</SortTable>
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Category_At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Updated_At
              </th>
              <th scope="col" className="px-6 py-3 text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <VoucherLoader />
            ) : data?.data?.length === 0 ? (
              <VoucherEmpty />
            ) : (
              data?.data?.map((voucher) => (
                <VoucherListRow key={voucher.id} voucher={voucher} />
              ))
            )}
          </tbody>
        </table>
      </div>

      {
        <Pagination
          updateFetchUrl={updateFetchUrl}
          links={data?.links}
          meta={data?.meta}
        />
      }
    </div>
  );
};

export default ProductTable;


import React, { useState } from "react";
import { BsPencil } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ShowDateTime from "../../../components/ShowDateTime";
import { LuArrowRight, LuCalculator } from "react-icons/lu";
import { destroyVoucher } from "../../../services/voucher";




bouncy.register();

const VoucherListRow = ({
  voucher: {
    id,
    voucher_id,
    customer_name,
    created_at,
    updated_at,
    customer_email,
    sale_date,
    total,
    tax,
  },
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDeleteBtn = async () => {
    try {
      setIsDeleting(true);
      const res = await destroyVoucher(id);
      const json = await res.json();

      if (res.status === 200) {
        toast.success(json.message);
        mutate(import.meta.env.VITE_API_URL + `/vouchers`);
      } else {
        toast.error(json.message);
      }
    } catch (error) {
      toast.error("An error occurred ");
    }
  };
  return (
    <>
      <tr className="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        {/* <td className="px-6 py-4">{id}</td> */}
        <td
          scope="row"
          className="px-6 flex flex-col py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          <span>{voucher_id}</span>
          <span className="flex items-center gap-1"><LuCalculator /> {sale_date}</span>
        </td>

        <td className="px-6 py-4   ">
          
            <p>{customer_name}</p>
            <p>{customer_email}</p>
        </td>
        <td className="px-6 py-4 text-end">{tax}</td>

        <td className="px-6 py-4 text-end">{total}</td>
        <td className="px-6 py-4 text-end">
          <ShowDateTime timeStamp={created_at} />
        </td>
        <td className="px-6 py-4 text-end">
          <ShowDateTime timeStamp={updated_at} />
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex  rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={handleDeleteBtn}
              className="size-10 flex items-center justify-center text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {isDeleting ? (
                <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
              ) : (
                <FaRegTrashCan />
              )}
            </button>
            <Link
              to={`/dashboard/voucher-detail/${id}`}
              className="px-4 py-2 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-stone-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <LuArrowRight />
            </Link>

          </div>
        </td>
      </tr>
    </>
  );
};

export default VoucherListRow;

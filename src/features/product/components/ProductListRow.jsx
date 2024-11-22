
import { BsPencil } from "react-icons/bs";
import { FaRegTrashCan } from "react-icons/fa6";
import { useSWRConfig } from "swr";
import { bouncy } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import ShowDateTime from "../../../components/ShowDateTime";
import { destroyProduct } from "../../../services/product";

bouncy.register();

const ProductListRow = ({
  product: { id, product_name, price, created_at,updated_at },
}) => {
  const { mutate } = useSWRConfig();
  const [isDeleting, setIsDeleting] = useState(false);
  
  const handleDeleteBtn = async () => {
    try{
        setIsDeleting(true);
    const res =  await destroyProduct(id)
    const json = await res.json();

    if(res.status === 200){
      toast.success(json.message);
      mutate(import.meta.env.VITE_API_URL + "/products");
    }else {
      toast.error(json.message);
    }
    }catch(error){
        toast.error("An error occurred ");
       
    }finally{
        setIsDeleting(false)
    }
    
  };
  return (
    <>
      <tr className="odd:bg-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
        <td className="px-6 py-4">{id}</td>
        <td
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {product_name}
        </td>

        <td className="px-6 py-4 text-end">{price}</td>
        <td className="px-6 py-4 text-end">
          <ShowDateTime timeStamp={created_at} />
        </td>
        <td className="px-6 py-4 text-end">
          <ShowDateTime timeStamp={updated_at} />
        </td>
        <td className="px-6 py-4 text-end">
          <div className="inline-flex  rounded-md shadow-sm" role="group">
            <Link
              to={`/dashboard/product-edit/${id}`}
              className="px-4 py-2 flex justify-center items-center text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-stone-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              <BsPencil />
            </Link>

            <button
              type="button"
              onClick={handleDeleteBtn}
              className="size-10 flex items-center justify-center text-sm font-medium text-red-500 bg-white border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-red-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
            >
              {isDeleting ? (
                <l-bouncy size="20" speed="1.75" color="red"></l-bouncy>
              ) : (
                <FaRegTrashCan />
              )}
            </button>
          </div>
        </td>
      </tr>
    </>
  );
};

export default ProductListRow;
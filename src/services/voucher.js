import { getCookie } from "react-use-cookie";

export const fetchVouchers = async(...args) => {
    return fetch(...args,{
        headers:{
            
          "Authorization":`Bearer ${getCookie("my_token")}`
        }
      }
        
      ).then((res) => res.json());
}

export const destroyVoucher = (id) => {
  return fetch(import.meta.env.VITE_API_URL + `/vouchers/${id}`, {
    method: "Delete",
    headers:{
        "Content-Type": "application/json",
        Authorization :`Bearer ${getCookie("my_token")}`
    }
  })
}
export const storeVoucher = (currentVoucher) => {
  return  fetch(import.meta.env.VITE_API_URL + "/vouchers", {
    method: "POST",
    body: JSON.stringify(currentVoucher),
    headers: {
      "Content-Type": "application/json",
      
      Authorization :`Bearer ${getCookie("my_token")}`
    },
  });
}
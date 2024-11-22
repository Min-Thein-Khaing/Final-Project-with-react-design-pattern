import { getCookie } from "react-use-cookie";

export const changePassword = (data) => {
    return fetch(
        import.meta.env.VITE_API_URL + "/user-profile/change-password",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${getCookie("my_token")}`,
          },
        }
      );
}

export const changeName = (data) => {
    return fetch(import.meta.env.VITE_API_URL + "/user-profile/change-name", {
        method:"POST",
        body: JSON.stringify(data),
        headers:{
          "Content-Type":"application/json",
          Accept:"application/json",
          Authorization: `Bearer ${getCookie("my_token")}`,

        }
      })
}
export const changeImage = (formData) => {
    return fetch(
        import.meta.env.VITE_API_URL + "/user-profile/change-profile-image",
        {
          method: "POST",
          //photo ka json ma hope top  body: JSON.stringify(data) de lo yay ma ya
          body: formData,
          headers: {
            // "Content-Type": "application/json",
            // "Content-Type":"multipart/form-data", lo yin htae
            Accept: "application/json",
                Authorization: `Bearer ${getCookie("my_token")}`,

          },
        }
      );
}
import axios from "axios"

export async function getMercadoPago(email, btnPrice, month) {
    try {
      const emailVerify = await axios.get(`${axios.defaults.baseURL}/premium/subscription/${email}/${btnPrice}/${month}`);
      return { url: emailVerify.data.init_point, id: emailVerify.data.id };
    } catch (error) {
      console.log(error);
    }
  }

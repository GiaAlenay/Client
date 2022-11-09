import axios from "axios"

export async function getMercadoPago(email, btnPrice, month) {
    try {
      const emailVerify = await axios.get(`${axios.defaults.baseURL}/premium/subscription/${email}/${btnPrice}/${month}`);
      return { url: emailVerify.data.init_point, id: emailVerify.data.id };
    } catch (error) {
      console.log(error);
    }
  }

export async function getMercadoPagoPayment(){
  try{
    const payment = await axios.get(`${axios.defaults.baseURL}/premium/payment`);
    return {url:payment.data.init_point}
  }catch(error){
    console.log(error)
  }
}

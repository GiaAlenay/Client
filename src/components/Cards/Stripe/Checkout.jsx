import { CardElement, PaymentElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import axios from 'axios';
import Swal from "sweetalert2";
import { useSelector } from 'react-redux';
import { loading } from '../../../redux/actions';
import s from "./Checkout.module.css"
const CheckoutForm = () => {
    const userLoged = useSelector(state => state.UserLoged);
    const stripe = useStripe()
    const elements = useElements()
    const handleSubmit = async (e) => {
        try {
            e.preventDefault()
            const { error, paymentMethod } = await stripe.createPaymentMethod({
                type: "card",
                card: elements.getElement(CardElement),
            })
            Swal.fire({
                title: "Pago en proceso",
                color: "#382c4b",
                icon: "success",
                confirmButtonColor: "#382c4b",
                confirmButtonText: "OK",
                background: "#e8e8e8",
            })
            if (!error) {
                const { id } = paymentMethod
                const { data } = await axios.post("http://localhost:3001/premium/api/checkout", {
                    id,
                    amount: 100,
                    userId: userLoged.id,
                    name : userLoged.usuario,
                    email: userLoged.email
                })
                console.log(data)
                Swal.fire({
                    title: "Pago realizado exitosamente ahora sos premuim",
                    color: "#382c4b",
                    icon: "success",
                    confirmButtonColor: "#382c4b",
                    confirmButtonText: "OK",
                    background: "#e8e8e8",
                })
            }else{
                Swal.fire({
                    title: "Error a la hora de poner tus datos",
                    color: "#382c4b",
                    icon: "error",
                    confirmButtonColor: "#382c4b",
                    confirmButtonText: "OK",
                    background: "#e8e8e8",
                })
            }
        } catch (error) {
            console.log(error)
            
        }
    }

    return (
    <div className={s.boxStripe}>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <br/>
            <button>
                Submit
            </button>
        </form>
    </div>
    );
};

export default CheckoutForm;
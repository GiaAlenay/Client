import { CardElement, PaymentElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import axios from 'axios';
import { Nav } from "../../components/Nav/Nav";
import { useSelector } from 'react-redux';

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
            if (!error) {
                const { id } = paymentMethod
                const { data } = await axios.post("http://localhost:3001/premium/api/checkout", {
                    id,
                    amount: 10,
                    userId: userLoged.id
                })
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
    <div>
        <Nav/>
        <h1>Haste Premium</h1>
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button>
                Submit
            </button>
        </form></div>
    );
};

export default CheckoutForm;
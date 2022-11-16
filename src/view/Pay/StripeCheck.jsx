import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from "./CheckoutStripe"
// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.

const stripePromise = loadStripe("pk_test_51M4XYbIEql9X77EB4U7ERhLxGQShcpxXee12qTJ9dgqKm8PTzesw1ed1S5uYFrsJzE0low9iaKOfLbM5fUKYNYGV00zCqttqV1");


export default function StripeCheck() {
    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'sk_test_51M4XYbIEql9X77EBzKonxJpaGRoqHvufT3XLhV2sWbGUFenpZ6tsLPMW3Jn5uMirPe96T7OacjD65fsdr0LSwm7M00qKOcsbaT'
      }

  return (
      <div>
       <CheckoutForm/>
      </div>
  );
};
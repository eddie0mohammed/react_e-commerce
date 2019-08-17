import React from 'react'

import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeButton = (props) => {
    const {price} = props;

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_7tjkKEDPsVqmgFvTWOg313bQ00zvM667Bp';

    const onToken = (token) => {
        
       axios({
           url: 'payment',
           method: 'post',
           data: {
               amount: priceForStripe,
               token
           }
       })
        .then(response => {
            alert('Payment Successful');

        })
        .catch(err => {
            console.log(JSON.parse(err));
            alert('Error processing payment');
        })
        
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="Crown Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}

        />
    )
}

export default StripeButton

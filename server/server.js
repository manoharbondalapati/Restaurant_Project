const express = require('express');
const Stripe = require('stripe');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const stripe = Stripe('sk_test_51PKx8QSJqtr5veewwhC3eXpD039qlH9fIlQ6bxsSqnTshBKtGjv7nbDgbeylLTfyLVeRZHuSeAAbkcdxO5iBDy3C00kNlHhx11'); // Replace with your Stripe secret key

app.use(cors());
app.use(bodyParser.json());

app.post('/create-checkout-session', async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Manchuria',
            },
            unit_amount: 2000, // Price in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
    
success_url: 'http://localhost:3000/https://www.linkedin.com/feed/',
cancel_url: 'http://localhost:3000/https://www.facebook.com/',

    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(4242, () => console.log('Server running on port 4242'));





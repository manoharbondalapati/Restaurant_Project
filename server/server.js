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
            currency: 'inr',
            product_data: {
              name: 'Manchuria',
            },
            unit_amount: 2000, // Price in paisa (INR)
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://manoharbondalapati.github.io/Restaurant_Project/index.html?success=true',
      cancel_url: 'https://manoharbondalapati.github.io/Restaurant_Project/index.html?cancel=true',
    });

    res.json({ id: session.id });
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(8080, () => console.log('Server running on port 8080'));

const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
var coinbase = require('coinbase-commerce-node');
var Webhook = require('coinbase-commerce-node').Webhook;

var Client = coinbase.Client;
Client.init(process.env.COINBASE_API_KEY);
var resources = coinbase.resources;

const stripe = process.env.STRIPE_SECRET;
const stripeClient = new Stripe(stripe);

async function initPaymentIntent(amount) {
  console.log(amount);
  return stripeClient.paymentIntents.create({
    payment_method_types: ['card'],
    amount: amount * 100,
    currency: 'usd',
  });
}

router.post('/stripe', async (req, res) => {
  console.log('body: ', req.body);
  const totalCost = req.body.totalCost;
  const paymentIntent = await initPaymentIntent(totalCost);
  console.log('paymentIntent.client_secret: ', paymentIntent.client_secret);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

router.post('/create-subscription', async (req, res) => {
  console.log('create subscription: ', req.body);
  // try {
  const customer = await stripeClient.customers.create({
    email: req.body.email,
    source: req.body.source, // Payment source token from Stripe Elements
  });

  console.log('Customer: ', customer.id);
  //   const subscription = await stripe.subscriptions.create({
  //     customer: customer.id,
  //     items: [{ price: 'your_price_id' }], // Replace with your Stripe Price ID
  //   });

  //   res.json({ subscription });
  // } catch (error) {
  //   res.status(500).json({ error: error.message });
  // }
});

router.post('/coinbase', async (req, res) => {
  console.log('body: ', req.body);
  const { amount } = req.body;
  try {
    const charge = await resources.Charge.create({
      name: 'khan',
      description: 'coinbase',
      local_price: {
        amount: amount,
        currency: 'USD',
      },
      pricing_type: 'fixed_price',
      metadata: {
        user_id: '1234',
      },
    });

    res.status(200).json({
      charge: charge,
    });
  } catch (err) {
    res.status(500).json({
      err: err,
    });
  }
});

router.post('/webhooks', (req, res) => {
  console.log('webhook');
  try {
    const event = Webhook.verifyEventBody(
      req.rawBody,
      req.headers['x-cc-webhook-signature'],
      process.env.COINBASE_WEBHOOK_SECRET
    );
    if (event.type === 'charge:confirmed') {
      let amount = event.data.pricing.local.amount;
      let currency = event.data.pricing.local.currency;
      let user_id = event.data.metadata.user_id;
      console.log('data: ', amount, currency, user_id);
    }
    console.log('Received event:', event);
    res.status(200).end();
  } catch (err) {
    res.status(500).json({ err });
  }
});

module.exports = router;

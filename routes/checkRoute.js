const express = require('express');
const router = express.Router();
const Stripe = require('stripe');
var coinbase = require('coinbase-commerce-node');
var Webhook = require('coinbase-commerce-node').Webhook;
const Key = require('../models/SecretKeys');
var Client = coinbase.Client;
Client.init(process.env.COINBASE_API_KEY);
var resources = coinbase.resources;

// const stripe = process.env.STRIPE_SECRET;

async function createStripeClient() {
  try {
    const keyData = await Key.findByPk(1); // Modify as needed based on your data
    const secret_Key = keyData.secretKey;

    return new Stripe(secret_Key);
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create Stripe client');
  }
}

async function initPaymentIntent(amount) {
  const stripeClient = await createStripeClient();
  console.log('stripeClient: ', stripeClient);

  return stripeClient.paymentIntents.create({
    payment_method_types: ['card'],
    amount: amount * 100,
    currency: 'usd',
  });
}

router.post('/stripe', async (req, res) => {
  const totalCost = req.body.totalCost;
  const paymentIntent = await initPaymentIntent(totalCost);
  // console.log('paymentIntent.client_secret: ', paymentIntent.client_secret);
  res.send({
    clientSecret: paymentIntent.client_secret,
  });
});

router.post('/create-subscription', async (req, res) => {
  try {
    const paymentMethodId = req.body.paymentMethodId;
    const email = req.body.email;

    // Create a customer
    const customer = await stripeClient.customers.create({
      email: email,
    });
    console.log('Customer: ', customer);

    // Create a subscription using the payment method and subscription plan ID

    // payment_method: 'pm_card_us',

    // Set the default payment method on the customer
    try {
      await stripeClient.paymentMethods.attach('pm_card_us', {
        customer: customer.id,
      });
    } catch (error) {
      return res.status('402').send({ error: { message: error.message } });
    }

    const subscription = await stripeClient.subscriptions.create({
      customer: customer.id,
      items: [{ price: 'price_1NechALdgPiiadryq6NubUwN' }], // Replace with the actual price ID
      // payment_behavior: 'default_incomplete',
      // expand: ['latest_invoice.payment_intent'],
      // items: [
      //   {
      //     price_data: {
      //       currency: 'USD',
      //       product: 'prod_ORViYzkPNSFKgI',
      //       recurring: {
      //         interval: 'month',
      //         interval_count: 3,
      //       },
      //       unit_amount: 1000,
      //     },
      //     quantity: 1,
      //   },
      // ],
    });

    console.log('subscription: ', subscription);

    res.status(200).json({
      message: 'Subscription created successfully.',
      subscription: subscription,
    });
  } catch (error) {
    console.error('Error creating subscription:', error);
    res.status(500).json({ error: `An error occurred: ${error.message}` });
  }
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

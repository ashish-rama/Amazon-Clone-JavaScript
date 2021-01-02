const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
// API Test
const stripe = require('stripe')('sk_test_51I5HHyDjA78Il7YrIL5rcc3FRny33p837gbY899wsXN2n5bxPVjtO1gtYEFeBENrK6gVprCJr5WvecYLE1Ddf7sW005YyxZ3m3');

// API

// App config
const app = express();

// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello world'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment request received: ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: 'usd'
    });

    // OK - created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/ecomm-clone-8906a/us-central1/api
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51MaZMsSA0FkTuHkED3AeEG1Y2UUY3Bz3u2pojJ4FYHK0L6Q6Lsqlf7Gxd0BK5aLFyYsqkkE190Uu92rx27OWAHRE00EXy8nQHB");
const app = express();
app.use(cors({origin: true}));
app.use(express.json());
app.get("/", (req, res) => res.status(200).send("hello world"));
app.post("/payments/create", async (req, res) => {
  const total = req.query.total;
  console.log("payment Request BOOM >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

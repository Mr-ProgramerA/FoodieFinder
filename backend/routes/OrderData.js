const express = require("express");
const router = express.Router();
const Order = require("../models/Orders");

router.post("/orderData", async (req, res) => {
  let data = req.body.order_data;
  await data.splice(0, 0, { Order_data: req.body.order_date });

  // if email not existing in db then create; else : InsertMany()
  const eId = await Order.findOne({ email: req.body.email });
  console.log(eId);

  if (eId === null) {
    try {
      await Order.create({
        email: req.body.email,
        order_data: [data],
      }).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log(error.message);
      res.status(505).send("Server Error", error.message);
    }
  } else {
    try {
      await Order.findOneAndUpdate(
        { email: req.body.email },
        { $push: { order_data: data } }
      ).then(() => {
        res.json({ success: true });
      });
    } catch (error) {
      console.log("ERROR in updation of order data:\n", error);
      res.status(500).send("Server Error", error.message);
    }
  }
});

router.post("/myorderData", async (req, res) => {
  try {
    const myData = await Order.findOne({ email: req.body.email });
    res.json({ orderData: myData });
  } catch (error) {
    console.log("ERROR in fetching order data:\n", error);
    res.status(500).send("Server Error", error.message);
  }
});

module.exports = router;

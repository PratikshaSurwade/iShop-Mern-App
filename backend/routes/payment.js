const router = require("express").Router();
const Razorpay = require("razorpay");
const crypto = require("crypto");

const { nanoid } = require("nanoid");

router.post("/orders", async (req, res) => {
	console.log("iam in /api/payment/orders")
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});
		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: nanoid(10),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
			console.log("iam in /api/payment/orders", order)
			console.log(order)
		});

	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

router.get("/orders/pay/:id", async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const payment = await instance.orders.fetch(req.params.id, (error, order) => {
			if (error) {
				console.log(error);
			}
			else {
				res.status(200).json({ data: order });
			}
		});

	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});


router.post("/verify", async (req, res) => {
	console.log("i am in api/payment/verify")
	try {

		const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			console.log("Payment verified successfully");
			return res.status(200).json({ success: true, message: "Payment has been verified" });
		} else {
			console.log("Invalid signature");
			return res.status(400).json({ message: "Invalid signature sent!" });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
});

module.exports = router;

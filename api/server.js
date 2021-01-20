const express = require("express");
const db = require("../data/db-config");

const server = express();
server.use(express.json());
// server.use("api/cars", carsRouter)

server.get("/api/cars", async (req, res) => {
	try {
		const cars = await db("cars");
		res.status(200).json(cars);
	} catch (err) {
		res.status(500).json({
			err,
			errorMessage: err.message,
		});
	}
});

server.post("/api/cars", async (req, res) => {
	try {
		const newCarEntry = await db("cars").insert(req.body);
		res.status(201).json(newCarEntry);
	} catch (err) {
		res.status(500).json({
			err,
			errorMessage: err.message,
		});
	}
});

module.exports = server;

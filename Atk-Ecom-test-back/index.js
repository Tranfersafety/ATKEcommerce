import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import Transaction from "./transaction.js";

const app = express();

app.use(express.json());

app.use(cors());

dotenv.config();

const connectDB = async () => {
  await mongoose.connect(process.env.MONGO_URI, {});
};

app.post("/order", async (req, res, next) => {
  const { name, surname, address, province, tel, email, quantity, price } =
    req.body;

  const data = {
    name,
    surname,
    address,
    province,
    tel,
    email,
    quantity,
    price,
  };
  const tran = new Transaction(data);
  const createResult = await tran.save();
  res.status(201).json({ message: "transaction Created", data: tran });
});

connectDB();
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT} 🌏`);
});

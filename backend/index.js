import express from "express";
import connectDb from "./db/connectDb.js";
import helmet from "helmet";
import { PORT } from "./constants/constants.js";
const app = express();

app.use(helmet());
app.use(express.json());
connectDb();

app.listen(PORT, () => {
  console.log(`Server is running on Dope Mode on Port ${PORT}`);
});

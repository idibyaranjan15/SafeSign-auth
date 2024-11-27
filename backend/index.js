import express from "express";
import connectDb from "./db/connectDb.js";
import helmet from "helmet";
import { PORT } from "./constants/constants.js";
import mainRouter from "./routes/auth.routes.js";
const app = express();

app.use(helmet());
app.use(express.json());
app.use("/api/auth", mainRouter);

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on Dope Mode on Port ${PORT}`);
});

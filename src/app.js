import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./routes/ruleRoute";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use("/", router);

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import validations from "./middleware/validations";

const { checkRequired, checkDataType } = validations;

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({
    message: "My Rule-Validation API",
    status: "success",
    data: {
      name: "Ogodo Ufuoma Bella",
      github: "@bellogo",
      email: "ufuomaogodo@gmail.com",
      mobile: "08165341913",
      twitter: "@dcodeknight",
    },
  });
});
app.post("/validate-rule", checkRequired, checkDataType);

app.listen(port, () => {
  console.log(`Server Running on: ${port}`);
});

export default app;

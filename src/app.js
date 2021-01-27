import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
// import validation from "./src/controller/validation.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.get("/", (req, res) => {
  res.json({
    "message": "My Rule-Validation API",
    "status": "success",
    "data": {
        "name": "Ogodo Ufuoma Bella",
        "github": "@bellogo",
        "email": "ufuomaogodo@gmail.com",
        "mobile": "08165341913",
        "twitter": "@dcodeknight"
    }
  });
});
app.post('/validate-rule');


app.listen(port, () => {
    console.log(`Server Running on: ${port}`);
});
  
export default app;

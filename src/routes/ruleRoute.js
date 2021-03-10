import { Router } from "express";
import ruleController from "../controller/rule-validate";
import helpers from "../middleware/helpers";

const router = Router();
const { homePage, validateRule } = ruleController;
const { errorCheck } = helpers;

router.get("/", homePage);
router.post("/validate-rule", errorCheck, validateRule);

export default router;

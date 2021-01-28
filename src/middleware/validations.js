export default class Validations {
  // payload checker
  static checkPayload(requiredFields, reqObject, res) {
    const fields = Object.keys(reqObject);
    const payloadValid = fields.every(field => requiredFields.includes(field));
    if (!payloadValid) {
      return res.status(400).json({
        message: "Invalid JSON payload passed.",
        status: "error",
        data: null
      });
    }
  }

  // datatype check helper methods
  static isObject(field) {
    if (field.constructor.name === "Object") return true;
  }

  static isArray(field) {
    if (field.constructor.name === "Array") return true;
  }

  static isString(field) {
    if (typeof field === "string") return true;
  }

  static validateReq(req, res, next) {
    // check payload
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: "Invalid JSON payload passed.",
        status: "error",
        data: null
      });
    }
    // rule validations
    if (!req.body.rule) {
      return res.status(400).json({
        message: "rule is required.",
        status: "error",
        data: null,
      });
    }
    if (!Validations.isObject(req.body.rule)) {
      return res.status(400).json({
        message: "rule should be an object.",
        status: "error",
        data: null
      });
    }
    // field validations
    if (!req.body.rule.field) {
      return res.status(400).json({
        message: "field is required.",
        status: "error",
        data: null,
      });
    }
    if (!Validations.isString(req.body.rule.field)) {
      return res.status(400).json({
        message: "field should be a string.",
        status: "error",
        data: null
      });
    }
    if (req.body.rule.field.split(".").length > 2) {
      return res.status(400).json({
        message: "The nesting for the feild should not be more than two levels.",
        status: "error",
        data: null
      });
    }
    // condition validations
    if (!req.body.rule.condition) {
      return res.status(400).json({
        message: "condition is required.",
        status: "error",
        data: null,
      });
    }
    if (!Validations.isString(req.body.rule.condition)) {
      return res.status(400).json({
        message: "condition should be a string.",
        status: "error",
        data: null
      });
    }
    if (!["eq", "neq", "gt", "gte", "contains"].includes(req.body.rule.condition)) {
      return res.status(400).json({
        message: "provide an acepted condition.",
        status: "error",
        data: null
      });
    }
    // condition_value validations
    if (!req.body.rule.condition_value) {
      return res.status(400).json({
        message: "condition_value is required.",
        status: "error",
        data: null,
      });
    }
    // check payload
    Validations.checkPayload(["field", "condition", "condition_value"], req.body.rule, res);
    // data validations
    if (!req.body.data) {
      return res.status(400).json({
        message: "data is required.",
        status: "error",
        data: null,
      });
    }
    if (!Validations.isString(req.body.data) && !Validations.isObject(req.body.data) && !Validations.isArray(req.body.data)) {
      return res.status(400).json({
        message: "data should either be an object, array or string.",
        status: "error",
        data: null
      });
    }
    // check payload
    Validations.checkPayload(["rule", "data"], req.body, res);
    // data field validation
    const fieldArray = req.body.rule.field.split(".");
    if (!req.body.data[fieldArray[0]]) {
      return res.status(400).json({
        message: `field ${fieldArray[0]} is missing from data.`,
        status: "error",
        data: null
      });
    }
    if (fieldArray.length === 2 && !req.body.data[fieldArray[0]][fieldArray[1]]) {
      return res.status(400).json({
        message: `field ${fieldArray[1]} is missing from data.`,
        status: "error",
        data: null
      });
    }

    return next();
  }
}

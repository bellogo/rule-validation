import joiValidate from "../validation/joiValidation";

export default class helpers {
  static errorCheck(req, res, next) {
    try {
      const { error } = joiValidate(req.body);
      if (error) {
        return res.status(400).json({ message: error.message, status: "error", data: null });
      }

      const { data } = req.body;
      const { field } = req.body.rule;
      const fieldArray = field.split(".");

      if (fieldArray.length === 1 && data[fieldArray[0]]) {
        req.body.field_value = data[fieldArray[0]];
        return next();
      }
      if (fieldArray.length === 2 && data[fieldArray[0]] && data[fieldArray[0]][fieldArray[1]]) {
        req.body.field_value = data[fieldArray[0]][fieldArray[1]];
        return next();
      }
      return res.status(400).json({ message: `field ${field} is missing from data.`, status: "error", data: null });
    } catch (err) {
      return res.status(500).json({ message: "Server Error.", status: 500, data: null });
    }
  }
}

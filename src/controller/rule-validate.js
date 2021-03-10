export default class ruleController {
  static homePage(req, res) {
    res.status(200).json({
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
  }

  static validateRule(req, res) {
    const { condition, condition_value, field } = req.body.rule;
    const { field_value } = req.body;
    const isValid = () => {
      switch (condition) {
        case "eq":
          return field_value === condition_value;
        case "neq":
          return field_value !== condition_value;
        case "gt":
          return field_value > condition_value;
        case "gte":
          return field_value >= condition_value;
        case "contains":
          return field_value === condition_value;
      }
    };

    if (isValid()) {
      return res.status(200).json({
        message: `field ${field} successfully validated.`,
        status: "success",
        data: {
          validation: {
            error: false,
            field,
            field_value,
            condition,
            condition_value
          }
        }
      });
    }
    return res.status(200).json({
      message: `field ${field} failed validation.`,
      status: "error",
      data: {
        validation: {
          error: true,
          field,
          field_value,
          condition,
          condition_value
        }
      }
    });
  }
}

export default class Authentication {
  static checkRequired(req, res, next) {
    try {
      let requiredFeilds = ["rule", "data"];

      requiredFeilds.forEach(feild => {
        if (!req.body[feild]) {
          return res.status(400).json({
            message: `${feild} is required.`,
            status: "error",
            data: null,
          });
        }
      });

      //   let requiredRuleFeilds = ["field", "condition", "condition_value"];

      //   requiredRuleFeilds.forEach(feild => {
      //     if (!req.body.rule[feild] && req.body.rule[feild] !== 0) {
      //       return res.status(400).json({
      //         message: `${feild} is required.`,
      //         status: "error",
      //         data: null,
      //       });
      //     }
      //   });
      return next();
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: 500, error });
    }
  }

  static checkDataType(req, res) {
    try {
      if (req.body.rule.constructor.name !== "Object") {
        return res.status(400).json({
          message: "rule should be an object.",
          status: "error",
          data: null
        });
      }
    } catch (error) {
      console.log(error);
      return res.status(500).json({ status: 500, error });
    }
  }
}

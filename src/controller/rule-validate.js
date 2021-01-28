export default class Rulevalidator {
  static validateRule(req, res) {
    const { condition, condition_value, field } = req.body.rule;
    const { data } = req.body;
    const fieldArray = field.split(".");

    // equal rule validation
    if (condition === "eq" && fieldArray.length === 1) {
      if (data[fieldArray[0]] === condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[0]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[0],
              field_value: data[fieldArray[0]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[0]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[0],
            field_value: data[fieldArray[0]],
            condition,
            condition_value
          }
        }
      });
    }
    if (condition === "eq" && fieldArray.length === 2) {
      if (data[fieldArray[0]][fieldArray[1]] === condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[1]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[1],
              field_value: data[fieldArray[0]][fieldArray[1]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[1]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[1],
            field_value: data[fieldArray[0]][fieldArray[1]],
            condition,
            condition_value
          }
        }
      });
    }

    // not equal rule validation
    if (condition === "neq" && fieldArray.length === 1) {
      if (data[fieldArray[0]] !== condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[0]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[0],
              field_value: data[fieldArray[0]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[0]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[0],
            field_value: data[fieldArray[0]],
            condition,
            condition_value
          }
        }
      });
    }
    if (condition === "neq" && fieldArray.length === 2) {
      if (data[fieldArray[0]][fieldArray[1]] !== condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[1]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[1],
              field_value: data[fieldArray[0]][fieldArray[1]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[1]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[1],
            field_value: data[fieldArray[0]][fieldArray[1]],
            condition,
            condition_value
          }
        }
      });
    }

    //  greater than rule validation
    if (condition === "gt" && fieldArray.length === 1) {
      if (data[fieldArray[0]] > condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[0]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[0],
              field_value: data[fieldArray[0]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[0]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[0],
            field_value: data[fieldArray[0]],
            condition,
            condition_value
          }
        }
      });
    }
    if (condition === "gt" && fieldArray.length === 2) {
      if (data[fieldArray[0]][fieldArray[1]] > condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[1]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[1],
              field_value: data[fieldArray[0]][fieldArray[1]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[1]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[1],
            field_value: data[fieldArray[0]][fieldArray[1]],
            condition,
            condition_value
          }
        }
      });
    }

    // greater than or equal rule validation
    if (condition === "gte" && fieldArray.length === 1) {
      if (data[fieldArray[0]] >= condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[0]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[0],
              field_value: data[fieldArray[0]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[0]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[0],
            field_value: data[fieldArray[0]],
            condition,
            condition_value
          }
        }
      });
    }
    if (condition === "gte" && fieldArray.length === 2) {
      if (data[fieldArray[0]][fieldArray[1]] >= condition_value) {
        return res.status(200).json({
          message: `field ${fieldArray[1]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[1],
              field_value: data[fieldArray[0]][fieldArray[1]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[1]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[1],
            field_value: data[fieldArray[0]][fieldArray[1]],
            condition,
            condition_value
          }
        }
      });
    }

    // contains rule validation
    if (condition === "contains" && fieldArray.length === 1) {
      if (data[fieldArray[0]].includes(condition_value)) {
        return res.status(200).json({
          message: `field ${fieldArray[0]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[0],
              field_value: data[fieldArray[0]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[0]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[0],
            field_value: data[fieldArray[0]],
            condition,
            condition_value
          }
        }
      });
    }
    if (condition === "contains" && fieldArray.length === 2) {
      if (data[fieldArray[0]][fieldArray[1]].includes(condition_value)) {
        return res.status(200).json({
          message: `field ${fieldArray[1]} successfully validated.`,
          status: "success",
          data: {
            validation: {
              error: false,
              field: fieldArray[1],
              field_value: data[fieldArray[0]][fieldArray[1]],
              condition,
              condition_value
            }
          }
        });
      }
      return res.status(400).json({
        message: `field ${fieldArray[1]} failed validation.`,
        status: "error",
        data: {
          validation: {
            error: false,
            field: fieldArray[1],
            field_value: data[fieldArray[0]][fieldArray[1]],
            condition,
            condition_value
          }
        }
      });
    }
  }
}

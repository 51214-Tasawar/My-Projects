const { responseHandler } = require("../responseHandler");
const errorHandler = require("../errorhandler");

module.exports = {
  createvendor: (req, res) => {
    try {
      return responseHandler(res, req.body);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
  getvendor: (req, res) => {
    try {
      return responseHandler(res, req.query);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
  updatevendor: (req, res) => {
    try {
      return responseHandler(res, req.body);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
  deletevendor: (req, res) => {
    try {
      return responseHandler(res, req.query);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
};

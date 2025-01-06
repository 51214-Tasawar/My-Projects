const { responseHandler } = require("../responseHandler");
const errorHandler = require("../errorhandler");
const { CreateAdmin, GetAdmin } = require("../models/adminModel");

const { hash } = require("bcrypt");
const { v4: adminId } = require("uuid");

module.exports = {
  createAdmin: async (req, res) => {
    try {
      req.body.adminId = adminId();
      req.body.password = await hash(req.body.password, 10);
      const response = await CreateAdmin(req.body);

      if (response.error) {
        return errorHandler(res, response.error);
      }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
  getAdmin: async (req, res) => {
    try {
      const response = await GetAdmin();
      if (response.error) {
        return errorHandler(res, response.error);
      }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  updateAdmin: (req, res) => {
    try {
      return responseHandler(res, req.body);
    } catch (error) {
      return errorHandler(res, error);
    }
  },

  deleteAdmin: (req, res) => {
    try {
      return responseHandler(res, req.query);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
};

const { responseHandler } = require("../responseHandler");
const errorHandler = require("../errorhandler");
const { CreateAdmin, 
    GetAdmin ,
   updateadmin ,
   deleteadmin
} = require("../models/adminModel");

module.exports = {
  createAdmin: async (req, res) => {
    try {
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

  updateAdmin:async(req, res) => {
    try {
        const response = await updateadmin(req.body)
        if(response.error){
            return errorHandler(res, response.error);
        }
      return responseHandler(res, response.response);

    } catch (error) {
      return errorHandler(res, error);
    }
  },

  deleteAdmin:async(req, res) => {
    try {
        const response = await deleteadmin(req.query)
        if(response.error){
            return errorHandler(res, response.error);
        }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
};

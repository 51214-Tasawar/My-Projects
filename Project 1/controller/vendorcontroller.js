const { responseHandler } = require("../responseHandler");
const errorHandler = require("../errorhandler");
const {createVendor,
  updateVendor,
 getallVendor ,
  deleteVendor
} = require("../models/vendorModel")

module.exports = {
  createvendor: async(req, res) => {
    try {
      const response = await createVendor(req.body)
      if(response.error){
        return errorHandler(res, response.error);
      }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
  getvendor: async(req, res) => {
    try {
      const response = await getallVendor()
      if(response.error){
        return errorHandler(res, response.error);
      }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
  updatevendor:async(req, res) => {
    try {
      const response = await updateVendor(req.body)
      if(response.error){
        return errorHandler(res , response.error)
      }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
  deletevendor:async(req, res) => {
    try {
      const response = await deleteVendor(req.query)
      if(response.error){
        return errorHandler(res, response.error);
      }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
};

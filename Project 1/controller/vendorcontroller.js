const { responseHandler } = require("../responseHandler");
const errorHandler = require("../errorhandler");
const {createVendor,
  updateVendor,
  getVendor,
  deleteVendor
} = require("../models/vendorModel")


const { hash } = require("bcrypt")
const {v4 : vendorId} = require("uuid")

module.exports = {
  createvendor: async(req, res) => {
    try {
      req.body.vendorId = vendorId();
      req.body.password = await hash(req.body.password ,10)
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
      const response = await getVendor()
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
      const response = await deleteVendor(req.body)
      if(response.error){
        return errorHandler(res, response.error);
      }
      return responseHandler(res, response.response);
    } catch (error) {
      return errorHandler(res, error);
    }
  },
};

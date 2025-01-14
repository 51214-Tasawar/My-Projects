const { models } = require("../models/index");

module.exports = {
  createVendor: async (body) => {
    try {
      const response = await models.vendorTable.create({ ...body });
      return {
        response: response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  updateVendor: async ({ username, ...body }) => {
    try {
      const response = await models.vendorTable.update(
        {
          ...body,
        },
        { where: { username: username } }
      );
      return {
        response: response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  getallVendor: async () => {
    try {
      const response = await models.vendorTable.findAll({
        attributes : ["name", "username" , "email"]
      });
      return {
        response: response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteVendor:async({username}) => {
    try {
        const response = await models.vendorTable.destroy({where:{username : username}})
        return {
            response : response
        }
    }catch (error) {
      return {
        error: error,
      };
    }
  },
};

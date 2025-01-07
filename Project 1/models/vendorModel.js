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
  getVendor: async () => {
    try {
      const response = await models.vendorTable.findAll();
      return {
        response: response,
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },
  deleteVendor: () => {
    try {
        const response = models.vendorTable.destroy({where})
    } catch (error) {
      return {
        error: error,
      };
    }
  },
};

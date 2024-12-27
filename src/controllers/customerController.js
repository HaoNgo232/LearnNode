const { uploadSingleFile } = require("../services/fileService");
const {
  createCurtomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteCustomerService,
} = require("../services/customerService");
const Joi = require("joi");
module.exports = {
  postCreateCustomer: async (req, res) => {
    const { name, address, phone, email, description } = req.body;
    const schema = Joi.object({
      name: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
      address: Joi.string(),
      phone: Joi.string().pattern(new RegExp('^[0-9]{8,11}$')),
      email: Joi.string().email(),
      description: Joi.string(),
    });
    const result = schema.validate(req.body, { abortEarly: false });
    if (result.error) {
      return res.status(400).json({
        errorCode: 400,
        message: result.error.details.map((e) => e.message),
      });
    } else {
      let imageUrl = "";
      if (!req.files || Object.keys(req.files).length === 0) {
        // do nothing
      } else {
        let result = await uploadSingleFile(req.files.image);
        imageUrl = result.path;
      }
      let customerData = {
        name,
        address,
        phone,
        email,
        description,
        image: imageUrl,
      };
      let customer = await createCurtomerService(customerData);
      return res.status(200).json({
        errorCode: 0,
        data: customer,
      });
    }
  },

  postCreateArrayCustomer: async (req, res) => {
    let customers = await createArrayCustomerService(req.body.customers);
    if (customers) {
      return res.status(200).json({
        errorCode: 0,
        data: customers,
      });
    } else {
      return res.status(500).json({
        errorCode: 500,
        message: "Internal server error",
      });
    }
  },

  getAllCuctomers: async (req, res) => {

    let { limit, page, name } = req.query;
    console.log(">>> check query", req.query);
    results = null;
    if (limit && page) {
      results = await getAllCustomersService(limit, page, name, req.query);
    } else {
      results = await getAllCustomersService();
    }
    if (results) {
      return res.status(200).json({
        errorCode: 0,
        data: results,
      });
    } else {
      return res.status(500).json({
        errorCode: 500,
        message: "Internal server error",
      });
    }
  },

  putUpdateCustomer: async (req, res) => {
    let result = await putUpdateCustomerService(req.body);
    if (result) {
      return res.status(200).json({
        errorCode: 0,
        data: result,
      });
    } else {
      return res.status(500).json({
        errorCode: 500,
        message: "Internal server error",
      });
    }
  },

  deleteAcustomer: async (req, res) => {
    let id = req.body.id;
    let result = await deleteCustomerService(id);
    if (result) {
      return res.status(200).json({
        errorCode: 0,
        data: result,
      });
    } else {
      return res.status(500).json({
        errorCode: 500,
        message: "Internal server error",
      });
    }
  },
};

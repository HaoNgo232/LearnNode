const { uploadSingleFile } = require("../services/fileService");
const {
  createCurtomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteCustomerService,
} = require("../services/customerService");
module.exports = {
  postCreateCustomer: async (req, res) => {
    const { name, address, phone, email, description } = req.body;
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
    let results = await getAllCustomersService();
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

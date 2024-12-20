const Customer = require("../models/customer");

const createCurtomerService = async (customerData) => {
  try {
    let results = await Customer.create({
      name: customerData.name,
      address: customerData.address,
      phone: customerData.phone,
      email: customerData.email,
      description: customerData.description,
      image: customerData.image,
    });
    return results;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const createArrayCustomerService = async (arrayCustomers) => {
  try {
    let results = await Customer.insertMany(arrayCustomers);
    return results;
  } catch (error) {
    console.log(">>> check error", error);
    return null;
  }
};

const getAllCustomersService = async () => {
  try {
    let results = await Customer.find({});
    return results;
  } catch (error) {
    console.log(">>> check error", error);
    return null;
  }
};

const putUpdateCustomerService = async (customerData) => {
  try {
    let customer = await Customer.updateOne(
      { _id: customerData._id },
      {
        name: customerData.name,
        address: customerData.address,
        phone: customerData.phone,
        email: customerData.email,
        description: customerData.description,
      }
    );
    return customer;
  } catch (error) {
    console.log(">>> check error", error);
    return null;
  }
};

const deleteCustomerService = async (customerId) => {
  try {
    result = await Customer.deleteById({ _id: customerId });
    return result;
  } catch (error) {
    console.log(">>> check error", error);
    return null;
  }
};

module.exports = {
  createCurtomerService,
  createArrayCustomerService,
  getAllCustomersService,
  putUpdateCustomerService,
  deleteCustomerService,
};

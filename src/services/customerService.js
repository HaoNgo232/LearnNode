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

module.exports = { createCurtomerService, createArrayCustomerService };

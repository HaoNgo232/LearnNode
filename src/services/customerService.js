const Customer = require("../models/customer");
const aqp = require("api-query-params");


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

const getAllCustomersService = async (limit, page, name, queryString) => {
  try {
    let results = null;
    if (limit && page) {
      let offset = (page - 1) * limit;
      const { filter, skip } = aqp(queryString);
      delete filter.page;
      console.log(">>> check filter", filter);

      results = await Customer.find(filter).skip(offset).limit(limit).exec();

    } else {
      results = await Customer.find({});
    }
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

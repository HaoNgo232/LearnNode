const Task = require("../models/task");
const aqp = require("api-query-params");

const createTask = async (data) => {
    console.log(">>> check data", data);
    if (data.type === "EMPTY-TASK") {
        let result = await Task.create(data);
        return result;
    }
    return null;
};

const getTasks = async (queryString) => {
    const page = queryString.page;
    const { filter, limit, } = aqp(queryString);
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Task.find(filter)
        .skip(offset)
        .limit(limit)
        .exec();

    return result;
};

const updateTaskService = async (data) => {
    console.log(">>> check data", data);
    try {
        let result = await Task.updateOne({ _id: data._id }, { name: data.name, description: data.description, endDate: data.endDate });
        return result;
    } catch (error) {
        console.log(">>> check error", error);
        return null;
    }
}

const deleteTaskService = async (taskId) => {
    result = await Task.deleteById(taskId);
    return result;
};

module.exports = {
    createTask, getTasks, updateTaskService, deleteTaskService
};

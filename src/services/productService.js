const Project = require("../models/project");
const aqp = require("api-query-params");
const createProject = async (data) => {
    if (data.type === "EMPTY-PROJECT") {
        let result = await Project.create(data);
        return result;
    }
    if (data.type === "ADD-USERS") {
        // find project by id
        let project = await Project.findById(data.projectId).exec();
        for (let i = 0; i < data.usersArr.length; i++) {
            project.usersInfor.push(data.usersArr[i]);
        }
        let result = await project.save();
        return result;
    }
    if (data.type === "REMOVE-USERS") {
        let project = await Project.findById(data.projectId).exec();
        for (let i = 0; i < data.usersArr.length; i++) {
            project.usersInfor.pull(data.usersArr[i]);
        }
        let result = await project.save();
        return result;
    }
    if (data.type === "ADD-TASKS") {
        let project = await Project.findById(data.projectId).exec();
        for (let i = 0; i < data.tasksArr.length; i++) {
            project.tasks.push(data.tasksArr[i]);
        }
        let result = await project.save();
        return result;
    }
    return null;
};

const getProject = async (queryString) => {
    const page = queryString.page;
    const { filter, limit, population } = aqp(queryString);
    console.log(">>>check poulation", population)
    delete filter.page;
    let offset = (page - 1) * limit;
    result = await Project.find(filter)
        .populate(population)
        .skip(offset)
        .limit(limit)
        .exec();

    return result;
};

const deleteProjectService = async (projectId) => {
    result = await Project.deleteById(projectId);
    return result;
};

const updateProjectService = async (data) => {
    try {
        result = await Project.updateOne(
            { _id: data._id },
            {
                name: data.name,
                startDate: data.startDate,
                endDate: data.endDate,
                description: data.description,
            }
        );
        return result;
    } catch (error) {
        console.log(">>> check error", error);
        return null;
    }
};

module.exports = {
    createProject,
    getProject,
    deleteProjectService,
    updateProjectService,
};

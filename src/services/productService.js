const Project = require("../models/project");

createProject = async (data) => {
    if (data.type === "EMPTY-PROJECT") {
        let result = await Project.create(data);
        return result;
    }
    if (data.type === "ADD-USERS") {
        console.log("check data", data);
        // find project by id
        let project = await Project.findById(data.projectId).exec();
        for (let i = 0; i < data.usersArr.length; i++) {
            project.usersInfor.push(data.usersArr[i]);
        }
        let result = await project.save();
        return result;
    }
    return null;
}

module.exports = {
    createProject,
}
const {
    createProject,
    getProject,
    deleteProjectService,
    updateProjectService,
} = require("../services/productService");

module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json({
            message: "Create project successfully",
            data: result,
        });
    },

    getAllProject: async (req, res) => {
        result = await getProject(req.query);
        return res.status(200).json({
            message: "Get all project successfully",
            data: result,
        });
    },

    deleteProject: async (req, res) => {
        result = await deleteProjectService(req.query._id);
        return res.status(200).json({
            message: "Delete project successfully",
            data: result,
        });
    },

    putUpdateProject: async (req, res) => {
        result = await updateProjectService(req.body);
        return res.status(200).json({
            message: "Update project successfully",
            data: result,
        });
    },
};

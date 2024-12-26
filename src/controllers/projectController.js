const { createProject, getProject } = require('../services/productService');

module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json({
            message: "Create project successfully",
            data: result
        });

    },

    getAllProject: async (req, res) => {
        result = await getProject(req.query);
        return res.status(200).json({
            message: "Get all project successfully",
            data: result
        });
    }
}
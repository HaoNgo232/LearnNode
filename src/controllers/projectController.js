const { createProject } = require('../services/productService');

module.exports = {
    postCreateProject: async (req, res) => {
        let result = await createProject(req.body);
        return res.status(200).json({
            message: "Create project successfully",
            data: result
        });

    }
}
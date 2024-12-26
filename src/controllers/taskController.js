const { createTask, getTasks, updateTaskService, deleteTaskService } = require('../services/taskService');

module.exports = {
    postCreateTask: async (req, res) => {
        let result = await createTask(req.body);
        return res.status(200).json({
            message: "Create task successfully",
            data: result,
        });
    },

    getAllTasks: async (req, res) => {
        let result = await getTasks(req.query);
        return res.status(200).json({
            message: "Get all tasks successfully",
            data: result
        });
    },

    putUpdateTask: async (req, res) => {
        let result = await updateTaskService(req.body);
        return res.status(200).json({
            message: "Update task successfully",
            data: result,
        });
    },

    deleteTask: async (req, res) => {
        let result = await deleteTaskService(req.body._id);
        return res.status(200).json({
            message: "Delete task successfully",
            data: result
        });
    }
}
const express = require('express');
const Task = require('../models/task');

const router = express.Router();

router.post('/addTask',async (req,res)=>{
    try {
        const {task,status,subTask} = req.body;
        console.log(req.body);
         const data = new Task({
            task,
            status,
            subTask
         })

         await data.save();
         return res.json("user data saved");
    } catch (error) {
        console.error(error.message);
    }
})

router.get('/allTask', async(req,res)=>{
    try {
        const data = await Task.find()
        return res.json(data);
    } catch (error) {
        console.error(error.message)
    }
});

router.delete('/task/:id', async(req,res)=>{
    try {
        const taskId = req.params.id;
        await Task.findByIdAndRemove({_id:taskId});
        return res.json("remove successfully");
    } catch (error) {
        console.error(error.message);
    }
});

router.put('/task/:id', async(req,res)=>{
    try {
        const taskId = req.params.id;
        console.log(taskId);
        const newTask = await Task.findById(taskId);
        const {task,status,subTask} = req.body;
        newTask.task = task;
        newTask.status = status;
        newTask.subTask = subTask;
        await newTask.save();
        return res.json(newTask);
    } catch (error) {
        console.error(error.message)
    }
})

module.exports = router;
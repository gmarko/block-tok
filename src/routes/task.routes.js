const express = require('express');
const task = require('../models/task');
const router = express.Router();
const Task = require('../models/task');


router.get('/',async (req, res) => {

   const tasks = await Task.find(); //find all tasks
   
   res.json(tasks);     

});

router.post('/', async (req, res) => {
    const { title, description } = req.body;
    const task = new Task({ title, description });
    await task.save(title, description);
    res.json({status: 'tarea guardada'});

});

router.put('/', async (req, res) => {
    const { title, description} = req.body;
    const newTask = new Task({ title, description });
    await Task.findByIdAndUpdate(req.params.id, )
    res.json({status: 'tarea actualizada'});    

    });

router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({status: 'tarea eliminada'});

});

router.get('/:id', async (req, res) => {
    const task = await Task.findById(req.params.id);
    res.json(task);
});


    

module.exports = router;
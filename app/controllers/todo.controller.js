const db = require("../models");
const Todo = db.todo;

// Create and Save a new Tutorial
exports.create = (req, res) => {
  // Validate request
  if (!req.body.toDo) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a todo
  const todo = new Todo({
    toDo: req.body.toDo,
    status: req.body.status
  });

  // Save todo in the database
  todo
    .save(todo)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Tutorial."
      });
    });
};


exports.findAll = async (req, res) => {
  var condition = {};
  var page = req.query.page || 1;
  var limit = req.query.limit || 1;
  var totalTodoList = await Todo.count();
  var totalPage = totalTodoList/limit;

  Todo.find(condition)
    .skip((page - 1) * limit)
    .limit(limit)
    .then(data => {

      let outputData = {
        currentPage: page,
        totalPage:Math.round(totalPage),
        totalData: totalTodoList,
        data:data
      }

      res.send(outputData);

    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

exports.updateStatus = async (req, res) => {

  try {
    const { status, id } = req.body;

    const updatedTodo = await Todo.findByIdAndUpdate( id,
      { status : status },
      { new: true }
    );
    if (!updatedTodo) {
      return res.status(404).json({ error: 'Todo not found' });
    }
    res.json(updatedTodo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
  
};


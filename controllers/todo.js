const Todo = require('../models/todo');

exports.createTodo = (req, res, next) => {
  const todo = new Todo({
    Name: req.body.Name,
    description: req.body.description,
  });
  todo.save().then(
    () => {
      res.status(201).json({
        message: 'Post saved successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getOneTodo = (req, res, next) => {
  Todo.findOne({
    _id: req.params.id
  }).then(
    (todo) => {
      res.status(200).json(todo);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.modifyTodo = (req, res, next) => {
  const todo= new Todo({
    _id: req.params.id,
    Name: req.body.Name,
    description: req.body.description,
  
  });
  Todo.updateOne({_id: req.params.id}, todo).then(
    () => {
      res.status(201).json({
        message: 'Thing updated successfully!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.deleteTodo = (req, res, next) => {
  Todo.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
      });
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};

exports.getAllTodo = (req, res, next) => {
  Todo.find().then(
    (todos) => {
      res.status(200).json(todos);
    }
  ).catch(
    (error) => {
      res.status(400).json({
        error: error
      });
    }
  );
};
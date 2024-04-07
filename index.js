import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 6111;
let todos = [
  {
    id: 1,
    title: "Task 1",
    completed: false,
  },
  {
    id: 2,
    title: "Task 2",
    completed: false,
  },
];
app.use(bodyParser.json());

app.all("/", (req, res) => {
  console.log("Request: ", req);
  console.log("Response", res);
  res.send(`I'm up !!!`);
});

app.get("/api/todos", (req, res) => {
  res.send(todos);
});

app.post("/api/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.status(200).json("Yay!!! New TODO added!");
});

app.put("/api/todos/:id", (req, res) => {
  const newTodoData = req.body;
  const todoParamId = Number(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoParamId);
  if (todoIndex !== -1) {
    todos[todoIndex] = {
      id: todoParamId,
      ...newTodoData,
    };
    res.json({ message: "Updated todo with id " + todoParamId });
  } else {
    res
      .status(400)
      .json({ message: `Oops! Todo with id ${todoParamId} not found!` });
  }
});

app.delete("/api/todos/:id", (req, res) => {
  const todoToDelete = Number(req.params.id);
  const todoIndex = todos.findIndex((todo) => todo.id === todoToDelete);
  if (todoIndex !== -1) {
    todos.splice(todoIndex, 1);
  }
  res.json({ message: "Deleted todo with id " + todoToDelete });
});

app.listen(PORT, () => {
  console.log(`server listening on ${PORT}`);
});

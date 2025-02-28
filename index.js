import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

let tasks = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended : true }));

app.get("/", (req,res) => {
  res.render("index.ejs",{ tasks: tasks});
});

app.post("/", (req,res) => {
  const task = req.body["task"];
  if(task.trim() !== "") {
  tasks.push({text: task}); 
}
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const taskIndex = parseInt(req.body.index, 10);
  if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
    tasks.splice(taskIndex, 1);
  }
  res.redirect("/");
});


app.listen(port);
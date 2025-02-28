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
  tasks.push(task); 
}
  res.redirect("/");
});

app.listen(port);
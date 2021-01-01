const express = require("express");
const cors = require("cors");
const {uuid} = require("uuidv4")
// const { v4: uuid, validate: isUuid } = require('uuid');

const app = express();

app.use(express.json());
app.use(cors());

const repositories = [];

app.get("/repositories", (request, response) => {
  return response.json(repositories)  
});

app.post("/repositories", (request, response) => {
  const { title, url, tech} = request.body
  const repo = {id:uuid(), title, url, tech, likes:0}
  repositories.push(repo)
  return response.json(repo)
});

app.put("/repositories/:id", (request, response) => {
  const { id } = request.params
  const {title, url, tech} = request.body
  const repo = {
    title, url, tech
  }
  const repoIndex = repositories.findIndex(repo => repositories.id === id)
  repositories[repoIndex] = repo
  return response.json(repo)
});

app.delete("/repositories/:id", (request, response) => {
  // TODO
});

app.post("/repositories/:id/like", (request, response) => {
  // TODO
});

module.exports = app;

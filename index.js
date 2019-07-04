// implement your API here
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const db = require("./data/db");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get("/api/users", (req, res) => {
  db.find()
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      res.status(500).json({
        error: "The users' information could not be retrieved."
      });
    });
});

app.post("/api/users", (req, res) => {
  const { name, bio } = req.body;
  if (!name || !bio) {
    return res.status(400).send({
      errorMessage: "Please provide name and bio for the user."
    });
  } else {
    db.insert(req.body)
      .then(user => {
        res.status(201).json(user);
      })
      .catch(err => {
        res.status(500).json({
          error: "There was an error while saving the user to the database."
        });
      });
  }
});

app.get("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.findById(id)
    .then(user => {
      if (user) {
        res.status(200).json(user);
      } else {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The user information could not be retrieved."
      });
    });
});

app.delete("/api/users/:id", (req, res) => {
  const { id } = req.params;

  db.remove(id)
    .then(user => {
      if (!user) {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      } else {
        res.status(204).end();
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The user could not be removed."
      });
    });
});

app.put("/api/users/:id", (req, res) => {
  const { id } = req.params;
  const updatedInfo = req.body;

  if (!updatedInfo.name || !updatedInfo.bio) {
    res.status(400).json({
      errorMessage: "Please provide name and bio for the user."
    });
  }

  db.update(id, updatedInfo)
    .then(updated => {
      if (!updated) {
        res.status(404).json({
          message: "The user with the specified ID does not exist."
        });
      } else {
        res.status(200).json(updated);
      }
    })
    .catch(err => {
      res.status(500).json({
        error: "The user information could not be modified."
      });
    });
});

app.listen(8080, () => {
  console.log("Server is up and running");
});

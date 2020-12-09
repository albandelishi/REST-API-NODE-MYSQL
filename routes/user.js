const express = require("express");
const router = express.Router();

const mysqlConn = require("../database/dbconnection");

router.get("/test", (req, res) => {
  console.log("test router");
  res.end();
});

const querySelect = "SELECT * FROM user";

//get all users

router.get("/users", (req, res) => {
  mysqlConn.query(querySelect, (err, rows, fields) => {
    res.json(rows);
  });
});

//get user by id
router.get("/users/:id", (req, res) => {
  const userId = req.params.id;

  mysqlConn.query(
    `${querySelect} WHERE id = ?`,
    [userId],
    (err, rows, fields) => {
      if (err) {
        console.log(err);
        res.end();
      }
      res.json(rows);
    }
  );
});

//create new user
router.post("/user-create", (req, res) => {
  const { name, lastname, email } = req.body;
  console.log(name);

  mysqlConn.query(
    "INSERT INTO user (name, lastname, email) VALUES (?, ?, ?)",
    [name, lastname, email],
    (err, results, field) => {
      if (err) {
        console.log(`err insert ${err}`);
        res.sendStatus(500);
        return;
      }

      console.log(`Insert new user with id ${results.insertId}`);
      res.end();
    }
  );
  res.end();
});

//delete user by id
router.get("/user-delete/:id", (req, res) => {
  const userId = req.params.id;
  mysqlConn.query(
    "DELETE FROM user WHERE id = ? ",
    [userId],
    (err, results, field) => {
      if (err) {
        console.log(`err insert ${err}`);
        res.sendStatus(500);
        return;
      }
      console.log(`Deleted user with id ${userId}`);
      res.end();
    }
  );
  res.end();
});

module.exports = router;

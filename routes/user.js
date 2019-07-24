const express = require("express");
const router  = express.Router();
let userModel = require("../models/user");

// Route name: Index -- URL: /users -- HTTP Verb: GET -- Desc: List all users
// curl http://localhost:3000/user
router.get("/", (req, res) => {
    res.send(userModel);
});

//Route name: New -- URL: /users/new -- HTTP Verb: GET -- Desc: Show form to make new users
// curl http://localhost:3000/user/new
router.get("/new", (req, res) => {
    res.send("New user form \n");
});

//Route name: Create -- URL: /users -- HTTP Verb: POST -- Desc: Add new user to database
// curl POST -H "Content-Type: application/json" http://localhost:3000/user -d '{"id":"6", "username":"Guilherme Nascimento"}'
// curl -d '{"id":"6", "username":"Guilherme Nascimento"}' -H "Content-Type: application/json" -X POST http://localhost:3000/user
router.post("/", (req, res) => {
    const user = {
        id: req.body.id,
        username: req.body.username
    }
    userModel.push(user);
    res.send(userModel);
});

//Route name: Show -- URL: /users/:id -- HTTP Verb: GET -- Desc: Show info about one user
// curl http://localhost:3000/user/4
router.get("/:id", (req, res) => {
    const user = userModel.filter(u => u.id == req.params.id);
    res.send(user);
});

//Route name: Edit -- URL: /users/:id -- HTTP Verb: GET -- Desc: Show edit form of one user
// curl http://localhost:3000/user/4/edit
router.get("/:id/edit", (req, res) => {
    res.send("Edit user form \n");
});

//Route name: Update -- URL: /users/:id -- HTTP Verb: PUT -- Desc: Update a particular user
// curl -d '{"id":"4", "username":"Steve Caballero"}' -H "Content-Type: application/json" -X PUT http://localhost:3000/user/4
router.put("/:id", (req, res) => {
    const users = userModel.map( (u) => {
        if(u.id == req.params.id){
            u.username = req.body.username;
            return u;
        } 
        return u;
    });
    res.send(users);
});

//Route name: Destroy -- URL: /users/:id -- HTTP Verb: DELETE -- Desc: Delete a particular user
// curl -X DELETE http://localhost:3000/user/4
router.delete("/:id", (req, res) => {
    const users = userModel.filter( u => u.id != req.params.id);
    res.send(users);
});

module.exports = router;
import express from "express";
const Router = express.Router;
import User from "../models/user.model.js";

const router = Router();

router.route("/").get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(error => res.status(400).json("Error " + error))
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  
  const newUser = new User({username});

  newUser.save()
    .then(() => res.json("User added!"))
    .catch(error => res.status(400).json("Error " + error))
});

export default router;
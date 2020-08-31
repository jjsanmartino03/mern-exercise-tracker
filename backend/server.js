import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import exercisesRouter from "./routes/exercises.js";
import usersRouter from "./routes/users.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3005;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {useNewUrlParser:true, useCreateIndex:true})

const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established successfully")
});


app.use("/exercises", exercisesRouter);
app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
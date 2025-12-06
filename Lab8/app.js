import express from "express";
import routes from "./file.js";
import connectDB from "./database.js";

const app = express();
app.use(express.json());

connectDB();
app.use("/api/courses", routes);

app.listen(3000, () => console.log("web connected"));

import express from "express";
import router from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongo from "./db/connectMongo.js";

// Read the .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

// Parse requests of content-type - application/json
app.use(express.json());

// Parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", router);
app.listen(PORT, () => {
  connectMongo();
  console.log(`Server started on http://localhost:${PORT}`);
});

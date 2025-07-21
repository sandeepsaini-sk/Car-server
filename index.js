require("dotenv").config();
const express = require("express");
const AuthRouter = require("./Router/Auth-router");
const CarRouter = require("./Router/Car-router");
const bookRouter=require("./Router/book-router")
const connectdb = require("./db/db");
const cors = require("cors");
const app = express();

const corsOption = {
  origin:"http://localhost:5173",
  methods:  ["GET", "POST", "PUT", "DELETE", "PATCH"],
  credentials: true,
};
app.use(cors(corsOption));

app.use(express.json());

app.use("/", AuthRouter);
app.use("/", CarRouter);
app.use("/",bookRouter);
const PORT = process.env.PORT;
connectdb().then(() => {
  app.listen(PORT, () => {
    console.log(`srever is runing port ${PORT}`);
  });
});

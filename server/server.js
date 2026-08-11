import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";

import { apiRouter } from "./controllers/apiRouter.js";
const app = express();
const PORT = 5000;

dotenv.config();

app.use(express.json());

const secret = process.env.JOB_SESSION_SECRET;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(
  session({
    secret: secret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
    },
  }),
);

app.use("/", apiRouter);

app.listen(PORT, () => console.log(`The current server run is ${PORT}`));

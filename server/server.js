import express from "express";
import cors from "cors";
import session from "express-session";
import dotenv from "dotenv";
import { logInPage } from "./auth/loginPage.js";
import { signupPage } from "./auth/signupPage.js";
import { logoutPage } from "./auth/logoutPage.js";
import { getCurrentUser } from "./auth/currentUser.js";
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
const apiRouter = express.Router();

apiRouter.post("/login", logInPage);
apiRouter.post("/signup", signupPage);
apiRouter.get("/logout", logoutPage);
apiRouter.get("/me", getCurrentUser);

app.use("/", apiRouter);

app.listen(PORT, () => console.log(`The current server run is ${PORT}`));

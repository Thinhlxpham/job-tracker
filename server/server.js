import express from "express";
import cors from "cors";
import session from "express-session";

import { logInPage } from "./auth/loginPage.js";
import { signupPage } from "./auth/signupPage.js";
import { logoutPage } from "./auth/logoutPage.js";
import { getCurrentUser } from "./auth/currentUser.js";
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(
  cors({
    original: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(
  session({
    session: "auth-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 1000 * 60 * 60,
    },
  }),
);
const apiRouter = express.Router();

apiRouter.post("/login", logInPage);
apiRouter.post("/signup", logInPage);
apiRouter.get("/logout", logoutPage);
apiRouter.get("/me", getCurrentUser);

app.use("/", apiRouter);

app.listen(PORT, () => console.log(`The current server run is ${PORT}`));

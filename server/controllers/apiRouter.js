import express from "express";
import { logInPage } from "../auth/loginPage.js";
import { signupPage } from "../auth/signupPage.js";
import { logoutPage } from "../auth/logoutPage.js";
import { getCurrentUser } from "../auth/currentUser.js";

export const apiRouter = express.Router();

apiRouter.post("/login", logInPage);
apiRouter.post("/signup", signupPage);
apiRouter.post("/logout", logoutPage);
apiRouter.get("/me", getCurrentUser);

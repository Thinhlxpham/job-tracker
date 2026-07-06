import { createUserTable } from "../database/usersData.js";
import bcrypt from "bcrypt";

export const logInPage = async (req, res) => {
  let { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All field are require" });
  }

  email = email.trim();

  try {
    const db = await createUserTable();
    const user = await db.get("SELECT * FROM users WHERE email = ?", [email]);
    if (!user) {
      return res.status(401).json({ error: "Invalid credential" });
    }

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.status(401).json({ error: "Invalid credential" });
    }

    req.session.user = {
      id: user.id,
      email: user.email,
    };
    res.json({ message: "Logged in", user: req.session.user });
  } catch (err) {
    console.error("Login error:", err.message);
    return res.status(500).json({ message: err.message });
  }
};

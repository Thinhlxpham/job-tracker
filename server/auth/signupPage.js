import validator from "validator";
import { createUserTable } from "../database/usersData.js";
import bcrypt from "bcrypt";

export const signupPage = async (req, res) => {
  let { email, password, confirm } = req.body;

  if (!email || !password || !confirm) {
    return res.status(400).json({ message: "All field are require" });
  }
  if (password !== confirm) {
    return res
      .status(400)
      .json({ message: "Please match password and confirm password" });
  }
  email = email.trim();

  if (!validator.isEmail(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }
  try {
    const db = await createUserTable();
    const existing = await db.get("SELECT id FROM users WHERE email = ?", [
      email,
    ]);
    if (existing) {
      return res.status(400).json({ error: "Email already in use." });
    }
    const hashed = await bcrypt.hash(password, 10);
    const result = await db.run(
      "INSERT INTO users (email, password) VALUES(?, ?)",
      [email, hashed],
    );
    req.session.user = {
      id: result.lastID,
      email,
    };
    res
      .status(201)
      .json({ message: "User registered", user: req.session.user });
  } catch (err) {
    console.error("Registration error:", err.message);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
};

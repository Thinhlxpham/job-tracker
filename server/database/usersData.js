import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export async function createUserTable() {
  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    confirm TEXT
    )
    `);
  return db;
}

import sqlite3 from "sqlite3";
import { open } from "sqlite";
import path from "path";

export async function createJobsData() {
  const db = await open({
    filename: path.join("database.db"),
    driver: sqlite3.Database,
  });

  await db.exec(`
    CREATE TABLE IF NOT EXISTS jobs (
      id INTEGER PRIMARY KEY,
      company_name TEXT NOT NULL,
      position TEXT NOT NULL,
      status TEXT CHECK(status IN ('applied', 'interview', 'reject', 'offer')) NOT NULL,
      date_applied DATE,
      note TEXT NOT NUlL
    )
    `);
  return db;
}

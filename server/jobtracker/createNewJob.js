import { createJobsData } from "../database/jobsData.js";

export async function createNewJob(req, res) {
  let { company, position, status, date_applied, note } = req.body;

  if (!company || !position || !status || !date_applied || !note) {
    return res.status(400).json({ message: "All field are require" });
  }

  company = company.trim();
  position = position.trim();
  note = note.trim();

  try {
    const db = await createJobsData();
    const result = await db.run(
      "INSERT INTO jobs (company, position, status, date_applied, note) VALUES (?, ?, ?, ?, ?)",
      [company, position, status, date_applied, note],
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ error: "Failed to create job" });
  }
}

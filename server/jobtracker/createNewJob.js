import { createJobsData } from "../database/jobsData.js";

export async function createNewJob(req, res) {
  let { company_name, position, status, date_applied, note } = req.body;

  if (!company_name || !position || !status || !date_applied || !note) {
    return res.status(400).json({ message: "All field are require" });
  }

  company_name = company_name.trim();
  position = position.trim();
  note = note.trim();

  try {
    const db = await createJobsData();
    const result = await db.run(
      "INSERT INTO jobs (company_name, position, status, date_applied, note)",
      [company_name, position, status, date_applied, note],
    );
    res.status(201).json({ id: result.lastID });
  } catch (err) {
    console.error("Insert error:", err);
    res.status(500).json({ error: "Failed to create job" });
  }
}

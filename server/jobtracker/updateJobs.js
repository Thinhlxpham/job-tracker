import { createJobsData } from "../database/jobsData.js";

export async function updateJobs(req, res) {
  const { company, position, status, date_applied, note } = req.body;

  if (!company || !position || !status || !date_applied || !note) {
    return res.status(400).json({ message: "All field required" });
  }

  try {
    const db = await createJobsData();
    const result = await db.run(
      `UPDATE jobs SET company = ?, position = ?,status=?, date_applied=?, note=? WHERE id = ?`,
      [company, position, status, date_applied, note],
    );
    if (result.changes === 0) {
      return res.status(404).json({ error: "Job not change" });
    }
    res.status(201).json(result);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ error: "Failed to update job" });
  }
}

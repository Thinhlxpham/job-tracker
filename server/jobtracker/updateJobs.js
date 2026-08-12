import { createNewJob } from "./createNewJob.js";

export async function updateJobs(req, res) {
  const { company_name, position, status, date_applied, note } = req.body;

  if (!company_name || !position || !status || !date_applied || !note) {
    return res.status(400).json({ message: "All field required" });
  }

  try {
    const db = await createNewJob();
    const result = await db.run(
      `UPDATE jobs SET company_name = ?, position = ?,status=?, date_applied=?, note=? WHERE id = ?`,
      [company_name, position, status, date_applied, note],
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

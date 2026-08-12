import { createNewJob } from "./createNewJob.js";

export async function deleteJob(req, res) {
  try {
    const db = await createNewJob();
    const result = await db.run(`DELETE FROM jobs WHERE id=?`, [req.params.id]);
    if (!result) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(201).json(result);
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ error: "Failed to delete job" });
  }
}

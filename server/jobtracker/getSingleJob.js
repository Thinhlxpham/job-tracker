import { createJobsData } from "../database/jobsData.js";

export async function getSingleJob(req, res) {
  try {
    const db = await createJobsData();
    const job = await db.get("SELECT * FROM jobs WHERE id = ?", [
      req.params.id,
    ]);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.status(201).json(job);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch job" });
  }
}

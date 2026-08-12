import { createJobsData } from "../database/jobsData.js";

export async function getAllJob(req, res) {
  try {
    const db = await createJobsData();
    const jobs = await db.all("SELECT * FROM jobs");
    res.json(jobs);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
}

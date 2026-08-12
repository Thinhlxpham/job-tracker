import { createJobsData } from "../database/jobsData.js";

export async function getAllJob(req, res) {
  try {
    const jobs = await createJobsData();
    res.json(jobs);
  } catch (err) {
    console.error("Fetch error:", err);
    res.status(500).json({ error: "Failed to fetch jobs" });
  }
}

import express from "express";
import { createJobsData } from "../database/jobsData.js";
import { createNewJob } from "../jobtracker/createNewJob.js";
import { getAllJob } from "../jobtracker/getAllJob.js";
import { getSingleJob } from "../jobtracker/getSingleJob.js";
import { updateJobs } from "../jobtracker/updateJobs.js";
import { deleteJob } from "../jobtracker/deleteJob.js";

export const jobsRouter = express.Router();

jobsRouter.use(async (req, res, next) => {
  try {
    const data = await createJobsData();
    req.db = data;
    next();
  } catch (err) {
    console.error("Database connection error:", err);
    res.status(500).json({ error: "Database connection failed" });
  }
});

jobsRouter.post("/", createNewJob);
jobsRouter.get("/", getAllJob);
jobsRouter.get("/:id", getSingleJob);
jobsRouter.put("/:id", updateJobs);
jobsRouter.delete("/:id", deleteJob);

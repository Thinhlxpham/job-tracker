import { useState } from "react";
import ButtonApplication from "./ButtonApplication";
import JobLists from "./JobLists";
import StatusApplication from "./StatusApplication";
import FormModal from "./FormModal";

export default function MainPage({ jobs, getLoadJobs }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editingJob, setEditingJob] = useState(null);

  function openAddModal() {
    setEditingJob(null);
    setIsOpen(true);
  }

  function openEditModal(job) {
    setEditingJob(job);
    setIsOpen(true);
  }

  function handleClose() {
    setIsOpen(false);
    setEditingJob(null);
  }
  return (
    <main className="max-w-5xl mx-auto px-6 py-8">
      <ButtonApplication onAdd={openAddModal} />
      <StatusApplication />
      <JobLists jobs={jobs} getLoadJobs={getLoadJobs} onEdit={openEditModal} />
      <FormModal
        isOpen={isOpen}
        handleClose={handleClose}
        getLoadJobs={getLoadJobs}
        editingJob={editingJob}
      />
    </main>
  );
}

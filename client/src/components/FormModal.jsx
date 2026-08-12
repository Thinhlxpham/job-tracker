import { Modal } from "@mui/material";
import { X } from "lucide-react";
import { useState } from "react";
export default function FormModal({ isOpen, handleClose, getLoadJobs }) {
  const [company, setCompany] = useState("");
  const [position, setPosition] = useState("");
  const [status, setStatus] = useState("Applied");

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        company,
        position,
        status,
        applied_date: new Date().toISOString(),
      }),
    });

    if (!res.ok) {
      throw new Error("Fail to add new job");
    }

    setCompany("");
    setPosition("");
    setStatus("Applied");

    getLoadJobs();
    handleClose();
  }
  return (
    <Modal open={isOpen} onClose={handleClose}>
      <form
        onSubmit={handleSubmit}
        className="bg-white fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-100 rounded-[10px] "
      >
        <div className="flex flex-col space-y-1.5 text-center sm:text-left">
          <h2 className="font-semibold tracking-tight font-heading text-lg">
            Add Application
          </h2>
        </div>
        <div className="space-y-4 pt-2">
          <div className="space-y-1.5 flex flex-col gap-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              htmlFor="company"
            >
              Company Name
            </label>
            <input
              type="text"
              placeholder="e.g.Google"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 shadow-sm focus:outline-none"
              required={true}
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="space-y-1.5 flex flex-col gap-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              htmlFor="position"
            >
              Job Title
            </label>
            <input
              type="text"
              placeholder="e.g.AI Engineer"
              className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-2 shadow-sm focus:outline-none"
              id="title"
              required={true}
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5 flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="status"
              >
                Status
              </label>

              <select
                className="flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm cursor-pointer"
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Offer">Offer</option>
                <option value="Reject">Reject</option>
              </select>
            </div>
            <div className="space-y-1.5 flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="date"
              >
                Application Date
              </label>
              <input
                type="date"
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
              />
            </div>
          </div>
          <div className="space-y-1.5 flex flex-col gap-2">
            <label
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              htmlFor="notes"
            >
              Notes
            </label>
            <textarea
              className="flex min-h-15 w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-[#737373] overflow-auto resize-none"
              placeholder="Please include note about this application"
              id="notes"
            ></textarea>
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none border border-input bg-white shadow-sm hover:bg-[#ececec] hover:text-black h-9  text-black cursor-pointer px-4 py-2"
              onClick={handleClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none border border-input bg-black shadow-sm hover:bg-[#353434] hover:text-white h-9  text-white cursor-pointer px-4 py-2"
            >
              Add
            </button>
          </div>
          <button
            className="absolute right-4 top-4 rounded-sm opacity-70 bg-white transition-opacity hober:opacity-100 focus:outline-none"
            onClick={handleClose}
          >
            <X className="w-4 h-4 cursor-pointer" />
          </button>
        </div>
      </form>
    </Modal>
  );
}

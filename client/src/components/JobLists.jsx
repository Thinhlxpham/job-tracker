import { Pencil, Trash } from "lucide-react";

export default function JobLists({ jobs, getLoadJobs, onEdit }) {
  async function deleteJob(id) {
    await fetch(`http://localhost:5000/jobs/${id}`, {
      method: "DELETE",
      credentials: "include",
    });
    getLoadJobs();
  }
  return (
    <div className="border border-[#737373]/60 rounded overflow-hidden">
      <table className="w-full text-left">
        <thead>
          <tr className="bg-[#f5f5f566]/40 border-b border-border/60">
            <TableHeader text="Company" />
            <TableHeader text="Position" />
            <TableHeader text="Status" />
            <TableHeader text="Date" />
            <TableHeader text="Note" />
          </tr>
        </thead>
        <tbody>
          {jobs.length > 0 ? (
            jobs.map((job) => (
              <>
                <tr
                  key={job.id}
                  className="border-b border-border/50 hover:bg-muted/30 transition-colors group"
                >
                  <td className="py-3.5 px-4 font-medium text-black">
                    {job.company}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-[#737373]">
                    {job.position}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-[#737373]">
                    {job.status}
                  </td>
                  <td className="py-3.5 px-4 font-medium text-[#737373]">
                    {job.date_applied}
                  </td>
                  <td className="py-3.5 px-4 text-[#737373] text-sm max-w-50 truncate">
                    {job.note}
                  </td>
                  <td className="py-3.5 px-4 text-right">
                    <div className="flex justify-end gap-2 ">
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-8 h-8"
                        onClick={() => onEdit(job)}
                      >
                        <Pencil className="w-3.5 h-3.5" />
                      </button>
                      <button
                        className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-8 h-8"
                        onClick={() => deleteJob(job.id)}
                      >
                        <Trash className="w-3.5 h-3.5 text-red-700" />
                      </button>
                    </div>
                  </td>
                </tr>
              </>
            ))
          ) : (
            <tr>
              <td colSpan={6} className="py-6 px-4 text-center text-[#737373]">
                No application found!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

function TableHeader({ text }) {
  return (
    <th className="py-3 px-4 text-xs font-medium text-[#737373] uppercase tracking-wider">
      {text}
    </th>
  );
}

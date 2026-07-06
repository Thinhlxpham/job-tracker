import { Pencil, Trash } from "lucide-react";

export default function JobLists() {
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
            <TableHeader text="" />
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-border/50 hover:bg-muted/30 transition-colors group">
            <td className="py-3.5 px-4 font-medium text-black">Google</td>
            <td className="py-3.5 px-4 font-medium text-[#737373]">
              AI Engineer
            </td>
            <td className="py-3.5 px-4 font-medium text-[#737373]">Applied</td>
            <td className="py-3.5 px-4 font-medium text-[#737373]">
              July 1, 2026
            </td>
            <td className="py-3.5 px-4 text-[#737373] text-sm max-w-50 truncate">
              Applied through careers page
            </td>
            <td className="py-3.5 px-4 text-right">
              <div className="flex justify-end gap-2 ">
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-8 h-8">
                  <Pencil className="w-3.5 h-3.5" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium w-8 h-8">
                  <Trash className="w-3.5 h-3.5 text-red-700" />
                </button>
              </div>
            </td>
          </tr>
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

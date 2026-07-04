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

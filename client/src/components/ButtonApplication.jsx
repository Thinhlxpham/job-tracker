import { PlusIcon } from "lucide-react";

export default function ButtonApplication({ onAdd }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h2 className="text-2xl font-heading font-bold tracking-tight">
          Applications
        </h2>
        <p className="text-[#737373] text-sm mt-1">
          Tracking and manage your job applications
        </p>
      </div>
      <button
        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-black text-white shadow hover:bg-black/90 h-9 px-4 py-2 gap-2 cursor-pointer"
        onClick={onAdd}
      >
        <PlusIcon className="w-4 h-4" />
        Add Application
      </button>
    </div>
  );
}

import { LogOut } from "lucide-react";
import { useNavigate } from "react-router";

export default function NavBar({ currentUser }) {
  return (
    <nav className="border-b border-border/60 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-lg font-heading font-semibold tracking-tight">
          Job Tracker
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:block">
            {currentUser?.email || "Guest"}
          </span>
          <button
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
}

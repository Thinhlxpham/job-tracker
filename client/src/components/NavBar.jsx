import { LogIn, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export default function NavBar({ currentUser, setCurrentUser }) {
  async function logOut() {
    await fetch("http://localhost:5000/logout", {
      method: "POST",
      credentials: "include",
    });
    setCurrentUser(null);
  }
  return (
    <nav className="border-b border-border/60 bg-background/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <h1 className="text-lg font-heading font-semibold tracking-tight">
          Job Tracker
        </h1>
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground hidden sm:block">
            {currentUser?.email
              ? `Welcome ${currentUser?.email}`
              : "Welcome Guest"}
          </span>
          {currentUser ? (
            <button
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 cursor-pointer"
              onClick={logOut}
            >
              <LogOut className="w-4 h-4" />
            </button>
          ) : (
            <Link to={`/login`} className="cursor-pointer">
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-8 w-8 cursor-pointer">
                <LogIn className="w-4 h-4" />
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}

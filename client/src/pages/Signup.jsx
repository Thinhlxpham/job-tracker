import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-black">
            Create your account
          </h1>
          <p className="text-[#737373]">Sign up to get started </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
          <div className="space-y-4">
            <div className="space-y-2 flex flex-col gap-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="email"
              >
                Email
              </label>
              <input
                type="email"
                className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
                id="email"
                placeholder="your@gmail.com"
                required={true}
              />
            </div>
            <div className="space-y-2 flex flex-col gap-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="password"
              >
                Password
              </label>
              <input
                type="password"
                className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
                id="password"
                placeholder="Enter your password"
                required={true}
              />
            </div>
            <div className="space-y-2 flex flex-col gap-2">
              <label
                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                for="confirm"
              >
                Confirm Password
              </label>
              <input
                type="password"
                className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
                id="confirm"
                placeholder="Enter your password"
                required={true}
              />
            </div>
            <button className="w-full h-12 bg-black text-white rounded-xl cursor-pointer hover:bg-[#2f2a2a]">
              Create account
            </button>
          </div>
        </div>

        <p class="text-center text-sm text-muted-foreground mt-6">
          Already have account?{" "}
          <Link class="text-primary font-medium hover:underline" to="/login">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}

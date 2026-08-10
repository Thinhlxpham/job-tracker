import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5000/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await res.json();
      if (res.ok) {
        navigate("/");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error({ message: err.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-transparent px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold tracking-tight text-black">
            Welcome back
          </h1>
          <p className="text-[#737373]">Log in to your account </p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-border p-8">
          <div className="space-y-4">
            <div className="space-y-2 flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
                id="email"
                placeholder="your@gmail.com"
                required={true}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="space-y-2 flex flex-col gap-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="password"
              >
                Password
              </label>
              <input
                type="password"
                className="flex w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm"
                id="password"
                placeholder="Enter your password"
                required={true}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              className="w-full h-12 bg-black text-white rounded-xl cursor-pointer hover:bg-[#2f2a2a]"
              onClick={handleLogin}
            >
              Log in
            </button>
          </div>
        </div>

        <p className="text-center text-sm text-muted-foreground mt-6">
          Don't have an account?{" "}
          <Link
            className="text-primary font-medium hover:underline"
            to="/signup"
          >
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}

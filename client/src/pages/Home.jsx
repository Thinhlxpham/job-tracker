import { useState } from "react";
import FormModal from "../components/FormModal";
import MainPage from "../components/MainPage";

import NavBar from "../components/NavBar";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  async function fetchCurrentUser() {
    try {
      const res = await fetch("http://localhost:5000/me", {
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        navigate("/");
        return;
      }
      if (data.loggedIn) setCurrentUser(data.email);
    } catch (err) {
      console.error("Failed to fetch current user:", err);
    } finally {
      setLoading(false);
    }
  }

  async function getLoadJobs() {
    const response = await fetch("http://localhost:5000/jobs", {
      method: "GET",
      credentials: "include",
    });

    const data = await response.json();

    setJobs(data);
  }
  useEffect(() => {
    fetchCurrentUser();
    getLoadJobs();
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <MainPage jobs={jobs} getLoadJobs={getLoadJobs} />
      <FormModal getLoadJobs={getLoadJobs} />
    </>
  );
}

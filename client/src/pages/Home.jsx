import { useState } from "react";
import FormModal from "../components/FormModal";
import MainPage from "../components/MainPage";

import NavBar from "../components/NavBar";

import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function trackCurrentUser() {
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

    trackCurrentUser();
  }, []);

  if (loading) return null;

  return (
    <>
      <NavBar currentUser={currentUser} setCurrentUser={setCurrentUser} />
      <MainPage currentUser={currentUser} />
      <FormModal />
    </>
  );
}

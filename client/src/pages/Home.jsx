import { useState } from "react";
import FormModal from "../components/FormModal";
import MainPage from "../components/MainPage";

import NavBar from "../components/NavBar";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function trackCurrentUser() {
      const res = await fetch("http://localhost:5000/me", {
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) {
        navigate("/signup");
      }
      setCurrentUser(data);
    }
    trackCurrentUser();
  }, []);

  return (
    <>
      <NavBar currentUser={currentUser} />
      <MainPage />
      <FormModal />
    </>
  );
}

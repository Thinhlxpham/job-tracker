import { useState } from "react";
import FormModal from "../components/FormModal";
import MainPage from "../components/MainPage";

import NavBar from "../components/NavBar";
import { useEffect } from "react";

export default function Home() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    async function trackCurrentUser() {
      const res = await fetch("http://localhost:5000/me", {
        credentials: "include",
      });
      const data = await res.json();
      setCurrentUser(data);
    }
    trackCurrentUser();
  });
  return (
    <>
      <NavBar currentUser={currentUser} />
      <MainPage />
      <FormModal />
    </>
  );
}

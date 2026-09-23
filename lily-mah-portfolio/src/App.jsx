import { useState } from "react";
import HomePage from "./HomePage";
import PortfolioPage from "./PortfolioPage";
import AboutPage from "./AboutPage";

function App() {
  const [page, setPage] = useState("home");

  return (
    <main className={`site ${page}-page`}>

      {page === "home" && (
        <HomePage setPage={setPage} />
      )}

      {page === "portfolio" && (
        <PortfolioPage setPage={setPage} />
      )}

      {page === "about" && (
        <AboutPage setPage={setPage} />
      )}

    </main>
  );
}

export default App;
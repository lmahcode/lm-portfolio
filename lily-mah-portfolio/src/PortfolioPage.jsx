function PortfolioPage({ setPage }) {
  return (
    <>
      <header className="header">

        <button
          className="header-item lily small-nav"
          onClick={() => setPage("home")}
        >
          Lily Mah
        </button>

        <button className="header-item portfolio large-title">
          My Portfolio
        </button>

        <button
          className="header-item about small-nav"
          onClick={() => setPage("about")}
        >
          About Me
        </button>

      </header>

      <section className="page-content portfolio-content visible">

        {/* PROJECT 01 */}
        <div className="portfolio-row">

          <a
            className="project-image"
            href="https://embed.figma.com/design/HbBw6aEXR6pEjlG0CH5NR7/Phase-2--Copy-?node-id=0-1&embed-host=share"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/project1.svg"
              alt="Project 01"
            />
          </a>

          <div className="project-information">
            <h2>Fashion Brand Website Concept</h2>

            <p>
              This project explores my approach to visual communication,
              design, and creative problem solving. I developed the visual
              direction, interface, and user experience for a fashion brand
              website concept.
            </p>

            <a
              className="project-link"
              href="https://embed.figma.com/design/HbBw6aEXR6pEjlG0CH5NR7/Phase-2--Copy-?node-id=0-1&embed-host=share"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>

        </div>


        {/* PROJECT 02 */}
        <div className="portfolio-row">

          <a
            className="project-image"
            href="https://www.figma.com/design/lZ78zph5wr14uMWqRRBxKh/app-project?node-id=0-1&t=vFkXA8yTFLmeXr6w-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/project2.svg"
              alt="Project 02"
            />
          </a>

          <div className="project-information">
            <h2>Chef it Up App</h2>

            <p>
              This project allowed me to explore creating an app from my own project pitch deck. It allowed me to see a project from the ideation process to highfi wireframes stage. 
            </p>

            <a
              className="project-link"
              href="https://www.figma.com/design/lZ78zph5wr14uMWqRRBxKh/app-project?node-id=0-1&t=vFkXA8yTFLmeXr6w-1"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>

        </div>


        {/* PROJECT 03 */}
        <div className="portfolio-row">

          <a
            className="project-image"
            href="https://www.figma.com/design/6aGf6mTNlKBYSvTpTxW4Mo/app-dev-final-assign?node-id=0-1&t=vFkXA8yTFLmeXr6w-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/src/assets/project3.svg"
              alt="Project 03"
            />
          </a>

          <div className="project-information">
            <h2>Closet Cloud App</h2>

            <p>
              This project was created for app development learning. It focused on the navigations of how users complete intented actions in the app. 
            </p>

            <a
              className="project-link"
              href="YOUR_PROJEChttps://www.figma.com/design/6aGf6mTNlKBYSvTpTxW4Mo/app-dev-final-assign?node-id=0-1&t=vFkXA8yTFLmeXr6w-1T_03_URL"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>

        </div>

      </section>

      <footer>© 2026 Lily Mah</footer>
    </>
  );
}

export default PortfolioPage;
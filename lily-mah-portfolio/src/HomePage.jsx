import { useEffect, useRef } from "react";

const projects = [
  { title: "Project 01", image: "/src/assets/project1.svg" },
  { title: "Project 02", image: "/src/assets/project2.svg" },
  { title: "Project 03", image: "/src/assets/project3.svg" },
//   { title: "Project 04", image: "/src/assets/project4.jpg" },
//   { title: "Project 05", image: "/src/assets/project5.jpg" }
];

function HomePage({ setPage }) {
  const galleryRef = useRef(null);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
        event.preventDefault();
        gallery.scrollLeft += event.deltaY;
      }
    };

    gallery.addEventListener("wheel", handleWheel, {
      passive: false
    });

    return () => {
      gallery.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <header className="header">

        <button className="header-item lily large-title">
          Lily Mah
        </button>

        <button
          className="header-item portfolio small-nav"
          onClick={() => setPage("portfolio")}
        >
          My Portfolio
        </button>

        <button
          className="header-item about small-nav"
          onClick={() => setPage("about")}
        >
          About Me
        </button>

      </header>

      <section className="page-content home-content visible">
        <div className="home-gallery" ref={galleryRef}>
          <div className="gallery-track">

            {projects.map((project, index) => (
              <button
                className="project-card"
                key={index}
                onClick={() => setPage("portfolio")}
                aria-label={`Open ${project.title}`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  
                />
              </button>
            ))}

          </div>
        </div>
      </section>

      <footer>© 2026 Lily Mah</footer>
    </>
  );
}

export default HomePage;
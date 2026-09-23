function AboutPage({ setPage }) {
  return (
    <>
      <header className="header">

        <button
          className="header-item lily small-nav"
          onClick={() => setPage("home")}
        >
          Lily Mah
        </button>

        <button
          className="header-item portfolio small-nav"
          onClick={() => setPage("portfolio")}
        >
          My Portfolio
        </button>

        <button className="header-item about large-title">
          About Me
        </button>

      </header>

      <section className="page-content about-content visible">

        <div className="about-image">
          <img
            src="/src/assets/myprofile.jpg"
            alt="Lily Mah"
          />
        </div>

        <div className="about-text">

          <p>
            I'm Lily, a UI/UX designer interested in creating fun and
            accessible content. I work with Figma to create wireframes and
            prototype designs. I enjoy seeing the process of Figma wireframes
            fleshed out into fully functional UI/UX designs.
          </p>

          <p>
            My work combines creativity with learning and experimentation.
            In my pastime I enjoy learning new approaches to design and
            exploring different disciplines such as graphic design and
            motion design.
          </p>

        </div>

      </section>

      <footer>© 2026 Lily Mah</footer>
    </>
  );
}

export default AboutPage;
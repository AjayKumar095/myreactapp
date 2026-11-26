import './App.css'

function Header() {
  return (
    <header className="header">
      <a className="logo" href="#home">Alex Morgan</a>
      <nav aria-label="Main navigation">
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}

function Banner() {
  return (
    <main>
      <section className="banner" id="home">
        <p className="intro">Hi, I&apos;m Alex Morgan</p>
        <h1>I build simple things for the web.</h1>
        <p className="summary">
          I&apos;m a web developer who enjoys turning ideas into clear, useful
          websites.
        </p>
        <a className="button" href="#contact">Get in touch</a>
      </section>

      <section className="about" id="about">
        <h2>About me</h2>
        <p>
          I create responsive websites with HTML, CSS, JavaScript, and React.
          I care about making the web easy to use and enjoyable to explore.
        </p>
      </section>
    </main>
  )
}

function Footer() {
  return (
    <footer className="footer" id="contact">
      <p>Have a project in mind?</p>
      <a href="mailto:hello@example.com">hello@example.com</a>
      <small>© 2025 Alex Morgan</small>
    </footer>
  )
}

function App() {
  return (
    <div className="page">
      <Header />
      <Banner />
      <Footer />
    </div>
  )
}

export default App

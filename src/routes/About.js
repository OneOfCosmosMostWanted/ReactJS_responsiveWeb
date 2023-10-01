import Hero from "../components/Hero";
import NavbarOne from "../components/NavbarOne";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavbarOne></NavbarOne>
      <Hero
        cName="here-mid"
        heroImg="https://images.unsplash.com/photo-1632904472836-289166d8ea24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80"
        title="Your Journey Your Story"
        btnClass="hide"
     />
     <Footer></Footer>
    </>
  );
}

export default About;

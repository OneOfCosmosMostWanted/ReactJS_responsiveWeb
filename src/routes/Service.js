import Hero from "../components/Hero";
import NavbarOne from "../components/NavbarOne";
import ServiceImg from "../assets/gidle.jpg";
import Footer from "../components/Footer";

function Service() {
  return (
    <>
      <NavbarOne>
      </NavbarOne>
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" btnClass="hide" ></Hero>
      <Footer></Footer>
    </>
  );
}

export default Service;
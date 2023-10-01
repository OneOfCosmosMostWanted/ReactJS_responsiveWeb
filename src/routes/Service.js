import Hero from "../components/Hero";
import NavbarOne from "../components/NavbarOne";
import ServiceImg from "../assets/gidle.jpg";

function Service() {
  return (
    <>
      <NavbarOne>
      </NavbarOne>
      <Hero cName="hero-mid" heroImg={ServiceImg} title="Service" btnClass="hide" ></Hero>

    </>
  );
}

export default Service;
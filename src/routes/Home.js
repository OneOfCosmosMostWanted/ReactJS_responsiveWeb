import Destination from "../components/Destination";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NavbarOne from "../components/NavbarOne";
import Trip from "../components/Trip";

function Home() {
  return (
    <>
      <NavbarOne></NavbarOne>
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1572798278670-0e8ed2a1e5f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        title="Your Journey Your Story"
        text="Choose Your Favorite Destinaton."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
     />
     <Destination></Destination>
     <Trip/>
     <Footer></Footer>
    </>
  );
}

export default Home;

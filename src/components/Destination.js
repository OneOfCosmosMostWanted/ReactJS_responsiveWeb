import "./Destination.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you the opportunity to see a lot, within a time frame</p>
      <DestinationData
        className="first-des"
        heading="Taal Volcano, Batangas"
        text="Taal is a stratovolcano with a crater lake on a 5-km-wide volcanic island within a large caldera (Lake Taal) in the SW part of Luzon, Philippines, about 65 km S of Manila."
        img1="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/16/84/a2/7f/beautiful-taal-lake-hiked.jpg?w=1400&h=-1&s=1"
        img2="https://www.bria.com.ph/wp-content/uploads/2022/04/Facts-about-taal-Volcano-scaled.jpg"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Mt Daguldol, Batangas"
        text="Mt. Daguldol is a coastal mountain located in the province of Batangas. It offers a scenic view of nearby Batangas mountains and beaches. Additionally, Mt. Daguldol has an elevation of 672 MASL or 2204 feet. Mt. Daguldol is exactly situated in Sitio Biga, Barangay, Hugom San Juan, Batangas. It is bound between the municipality of San Juan and Lobo. The Lobo municipality is also a highlands, with Mt. Naguiling being the tallest mountain."
        img1="https://theadventurousherbivore.files.wordpress.com/2018/05/2018-05-13-16-06-06.jpg"
        img2="https://www.bria.com.ph/wp-content/uploads/2022/06/Hiking-in-Batangas-Mt.-Batulao.jpg"
      />
    </div>
  );
};

export default Destination;

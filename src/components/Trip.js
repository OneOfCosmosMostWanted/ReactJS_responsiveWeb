import "./TripStyle.css"
import TripData from "./TripData";


function Trip() {
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className="tripcard">
                <TripData
                    heading="Trip in Seoul"
                    text="Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine tree"
                    image="https://media.cntraveler.com/photos/5d72b0ef7ffc50000818c6c7/16:9/w_2560%2Cc_limit/Seoul%2C-Korea_GettyImages-560065591.jpg"
                />
                <TripData
                    heading="Trip in Phoenix"
                    text="Phoenix is the capital of the southwestern U.S. state of Arizona. Known for its year-round sun and warm temperatures, it anchors a sprawling, multicity metropolitan area known as the Valley of the Sun. It's known for high-end spa resorts, Jack Nicklaus–designed golf courses and vibrant nightclubs. Other highlights include the Desert Botanical Garden, displaying cacti and numerous native plants"
                    image="https://www.hellolanding.com/blog/wp-content/uploads/2022/12/saguaros-at-sunset-in-so.jpg"
                />
                <TripData
                    heading="Trip in Seoul"
                    text="Seoul, the capital of South Korea, is a huge metropolis where modern skyscrapers, high-tech subways and pop culture meet Buddhist temples, palaces and street markets. Notable attractions include futuristic Dongdaemun Design Plaza, a convention hall with curving architecture and a rooftop park; Gyeongbokgung Palace, which once had more than 7,000 rooms; and Jogyesa Temple, site of ancient locust and pine tree"
                    image="https://media.cntraveler.com/photos/5d72b0ef7ffc50000818c6c7/16:9/w_2560%2Cc_limit/Seoul%2C-Korea_GettyImages-560065591.jpg"
                />
            </div>
        </div>
    );
}

export default Trip;
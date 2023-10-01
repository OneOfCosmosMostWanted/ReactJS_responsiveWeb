import "./ContactFormStyles.css";

function ContactForm() {
    return (
        <div className="form-container">
            <h1>Send A Messange To Us!</h1>
            <form>
                <input placeholder="name"></input>
                <input placeholder="Email"></input>

                <input placeholder="Subject"></input>
                <textarea placeholder="Message" rows="4"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    );
}

export default ContactForm;
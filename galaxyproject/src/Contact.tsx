import react from "react";

const Contact: React.FC = () => {
  return (
    <div id="Contact">
      <div className="container">
        <div className="container">
          <h1>Contact Us</h1>
          <div className="row">
            <div className="col-md-6">
              <form>
                <div className="form-group">
                  <label htmlFor="name"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email"></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Your Email"
                    disabled
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message"></label>
                  <textarea
                    className="form-control"
                    id="message"
                    rows="4"
                    placeholder="Your Message"
                    disabled
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary" disabled>
                  Disabled
                </button>
              </form>
            </div>
            <div className="col-md-6">
              <h2>Contact Information</h2>
              <p>123 Main Street</p>
              <p>City, State ZIP</p>
              <p>Email: contact@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

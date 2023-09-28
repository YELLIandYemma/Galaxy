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
              <p>State: Karnataka</p>
              <p> City: Banglore, 560049</p>
              <p>Email: unavalible</p>
              <p>Phone: unavalible</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

import react from "react";

const Contact: React.FC = () => {
  return (
    <div id="Contact">
      <div className="email-form row g-2">
        <div className="col-md">
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInputGrid"
              placeholder="name@example.com"
              value="mdo@example.com"
            ></input>
            <label for="floatingInputGrid">Email address</label>
          </div>
        </div>
        <div className="col-md">
          <div className="form-floating">
            <select className="form-select" id="floatingSelectGrid">
              <option selected>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
            <label for="floatingSelectGrid">Works with selects</label>
          </div>
        </div>
        <button type="button" className="btn btn-primary" disabled>
          Primary button
        </button>
      </div>
    </div>
  );
};

export default Contact;

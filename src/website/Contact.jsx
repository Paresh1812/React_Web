import React, { useState } from "react";
// const [success, setSuccess] = useState(false);

function Contact() {
  const [data, setData] = useState({
    name: "",
    number: "",
    email: "",
    msg: "",
  });


  let InputEvent = (event) => {
    let { name, value } = event.target;
    setData((pervious_value) => {
      return {
        ...pervious_value,
        [name]: value,
      };
    });
  };

  let Submit = (e) => {
    e.preventDefault();
    alert(`${data.name} Information Submitted SuccessFully`)
    // setSuccess(true)
  };

  // {
  //   success && (
  //     <div className="alert alert-success" role="alert">
  //       Information Submitted Successfully
  //     </div>
  //   );
  // }

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form  onSubmit={Submit}>
              <div className="mb-3">
                <label  className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={data.name}
                  onChange={InputEvent}
                  placeholder="Enter Your Name"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">
                  Phone Number
                </label>
                <input
                  type="Number"
                  className="form-control"
                  name="number"
                  value={data.number}
                  onChange={InputEvent}
                  placeholder="Enter Number"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="Enter Your Gmail"
                />
              </div>
              <div className="mb-3">
                <label  className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  placeholder="Enter Your Message"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary" type="submit">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;

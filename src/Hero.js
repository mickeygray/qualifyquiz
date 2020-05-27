import React, { Fragment, useState, useEffect } from "react";
import hero from "./hero.png";
import Navbar from "./Navbar";

const Hero = () => {
  useEffect(() => {
    setForm({
      name: "",
      email: "",
      phone: "",
      debt: "",
      years: "",
      employed: "",
      income: "",
      creditscore: "",
    });
  }, []);

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    debt: "",
    years: "",
    employed: "",
    income: "",
    creditscore: "",
  });

  const {
    name,
    email,
    phone,
    debt,
    years,
    employed,
    income,
    creditscore,
  } = form;

  const onChange = (e) =>
    setForm({
      ...name,
      email,
      phone,
      debt,
      years,
      employed,
      income,
      creditscore,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };
  return (
    <Fragment>
      <Navbar />
      <p
        style={{
          backgroundColor: "blue",
          zIndex: "1",
          height: "100vh",
          opacity: "27.8%",
          position: "absolute",
          top: "0",
        }}>
        {" "}
        <img src={hero} alt='' style={{ zIndex: "-1", height: "100vh" }} />
      </p>
      {submitted ? (
        <div className='card bg-light'>
          Thank you for submitting your request.
          {creditscore < 600 ? (
            <div>
              You may qualify for total debt dismissal we will reach out to you
              about your application shortly
            </div>
          ) : (
            <div>
              You may qualify for total debt dismissal, please contact our
              office immediately. 1-800-000-0000
            </div>
          )}
        </div>
      ) : (
        <div className='grid-hero container'>
          <div className='homecopy'>
            <div className='py-3'>
              <h3 className='text-danger lead'>
                Your Prequalification Questionaires
              </h3>
              <i>Please note the following information before submiting</i>
              <br />
              <br />
              <ul className='mx-3'>
                <li>
                  You must be a resident of the United States or have a valid
                  TIN
                </li>
                <li>
                  You must owe more than 10,000 dollars as of your last known
                  assessment
                </li>
                <li>
                  You must provide accurate financial statements to be inspected
                  and processed by the Internal Revenue Service
                </li>
              </ul>
              <h5>
                If these are all true, please fill out the form to the right and
                we will instantly estimate a possible savings for you.
              </h5>
            </div>
            <div className='overlay'>
              <form name='lead' method='post'>
                <input type='hidden' name='form-name' value='contact' />
                <input
                  type='text'
                  placeholder='Name'
                  name='name'
                  value={name}
                  onChange={onChange}
                />
                <input
                  type='email'
                  placeholder='Email'
                  name='email'
                  value={email}
                  onChange={onChange}
                />
                <input
                  type='text'
                  placeholder='Phone'
                  name='phone'
                  value={phone}
                  onChange={onChange}
                />
                <input
                  type='text'
                  placeholder='Tax Debt'
                  name='debt'
                  value={debt}
                  onChange={onChange}
                />
                <input
                  type='text'
                  placeholder='Tax Years UnFiled'
                  name='years'
                  value={years}
                  onChange={onChange}
                />
                <input
                  type='text'
                  placeholder='Last Years Income'
                  name='income'
                  value={income}
                  onChange={onChange}
                />
                <input
                  placeholder='Credit Score'
                  type='text'
                  name='creditscore'
                  value={creditscore}
                  onChange={onChange}
                />
                <input
                  type='radio'
                  name='employed'
                  value='false'
                  checked={employed === "false"}
                  onChange={onChange}
                />{" "}
                Unemployed{" "}
                <input
                  type='radio'
                  name='employed'
                  value='true'
                  checked={employed === "true"}
                  onChange={onChange}
                />{" "}
                Employed
                <div>
                  <input
                    type='submit'
                    value='Do I qualify'
                    className='btn btn-primary btn-block'
                    onSubmit={onSubmit}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Hero;

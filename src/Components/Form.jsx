import React, { useState, useEffect } from "react";
import Alert from "./Alert";

function Form() {
  const [firstName,setFirstName] = useState("")
  const [lastName,setLastName] = useState("")
  const [email,setEmail] = useState("")
  const [fNameValid,setfNameValid] = useState(false)
  const [lNameValid,setlNameValid] = useState(false)
  const [emailValid,setEmailValid] = useState(false)
  const [submitted, setSubmitted] = useState(false); // added state variable


  useEffect(() => {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ig;

    if (firstName.length === 0) {
      setfNameValid(false);
    } else {
      setfNameValid(true);
    }
    if (lastName.length === 0) {
      setlNameValid(false);
    } else {
      setlNameValid(true);
    }
    if (!emailRegex.test(email)) {
      setEmailValid(false);
    } else {
      setEmailValid(true);
    }
  }, [firstName, lastName, email]);

  function formValidation(e) {
    if (fNameValid === false|| lNameValid === false|| emailValid === false) {
      e.preventDefault();
    }
    setSubmitted(true); // set form submitted to true

  }


    return (
      <div class="container w-50">
        <main class="form-signin w-100 m-auto mt-3">
            <form>
              <h1 class="h3 mb-3 fw-normal">Please register below</h1>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="fName" placeholder="John"
                onChange={e => setFirstName(e.target.value)} />
                <label for="fName">First Name</label>
                { submitted && fNameValid === false ?  <Alert message="First name input is not valid"/> : <div hidden></div>}
              </div>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="lName" placeholder="Smith"
                onChange={e => setLastName(e.target.value)}/>
                <label for="lName">Last Name</label>
                { submitted && lNameValid === false ?  <Alert message="Last name input is not valid"/> : <div hidden></div>}
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com"
                onChange={e => setEmail(e.target.value)}/>
                <label for="email">Email address</label>
                { submitted && emailValid === false ?  <Alert message="Email input is not valid"/> : <div hidden></div>}
              </div>

              <button class="w-100 btn btn-lg btn-primary" type="submit" onClick={formValidation}>Register</button>
              <p class="mt-5 mb-3 text-body-secondary">© 2023</p>
            </form>
             {submitted && fNameValid && lNameValid && emailValid === true ? <h1>Form successfully submitted</h1> : false}
        </main>
        </div>
    )
}

export default Form
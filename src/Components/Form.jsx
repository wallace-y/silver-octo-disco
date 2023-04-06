import React from "react";

function Form() {

    return (
      <div class="container w-50">
        <main class="form-signin w-100 m-auto mt-3">
            <form>
              <h1 class="h3 mb-3 fw-normal">Please register below</h1>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="John"/>
                <label for="floatingInput">First Name</label>
              </div>

              <div class="form-floating mb-3">
                <input type="text" class="form-control" id="floatingInput" placeholder="Smith"/>
                <label for="floatingInput">Last Name</label>
              </div>

              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>

              <button class="w-100 btn btn-lg btn-primary" type="submit">Register</button>
              <p class="mt-5 mb-3 text-body-secondary">© 2023</p>
            </form>
        </main>
        </div>
    )
}

export default Form
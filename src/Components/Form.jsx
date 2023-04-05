import React from "react";

function Form() {

    return (
        <main class="form-signin w-100 m-auto">
            <form>
              <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

              <div class="form-floating">
                <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                <label for="floatingInput">Email address</label>
              </div>
              <div class="form-floating">
                <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                <label for="floatingPassword">Password</label>
              </div>


              <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
              <p class="mt-5 mb-3 text-body-secondary">© 2017–2023</p>
            </form>
        </main>
    )
}

export default Form
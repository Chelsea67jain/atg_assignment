import React from 'react'

const SignUpComponent = () => {
  return (
    <div class="col-6">
      <div style={{ display: "flex" }}>
        <div class="mb-3">
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="First Name"
          />
        </div>
        <div class="mb-3" style={{ marginLeft: 10 }}>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Last Name"
          />
        </div>
      </div>

      <div class="mb-3">
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="Email Address"
        />
      </div>

      <div class="mb-3">
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="Password"
        ></input>
      </div>

      <div class="mb-3">
        <input
          type="password"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="Confirm Password"
        ></input>
      </div>

      <button
        type="button"
        class="btn btn-primary"
        style={{
          width: 350,
          height: 40,
          borderRadius: 20,
          background: "#2F6CE5",
          fontSize: 14,
          fontWeight: 600,
        }}
      >
        Create Account
      </button>

      <div
        style={{
          width: 350,
          height: 38,
          border: "1px solid #D9D9DB",
          marginTop: 20,
          marginLeft: 5,
          fontSize: 14,
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/facebook.png" width="16" height="16" />{" "}
        <span style={{ marginLeft: 5 }}> Sign up with Facebook</span>
      </div>

      <div
        style={{
          width: 350,
          height: 38,
          border: "1px solid #D9D9DB",
          marginTop: 10,
          marginLeft: 5,
          fontSize: 14,
          color: "#000",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="/google.svg" width="16" height="16" />
        <span style={{ marginLeft: 5 }}>Sign up with Google</span>
      </div>
    </div>
  );
}

export default SignUpComponent

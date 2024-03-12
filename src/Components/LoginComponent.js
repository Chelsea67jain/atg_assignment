import React from 'react'

const LoginComponent = () => {
  return (
    <div class="col-6" style={{ marginTop: 10 }}>
      <div class="mb-3">
        <input
          type="email"
          id="inputPassword5"
          class="form-control"
          aria-describedby="passwordHelpBlock"
          placeholder="Email"
        ></input>
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
        Sign In
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
      <div
        style={{
          marginTop: 20,
          width: 350,
          height: 38,
          textAlign: "center",
          fontWeight:"bold"
        }}
      >
        Forgot Password?
      </div>
    </div>
  );
}

export default LoginComponent

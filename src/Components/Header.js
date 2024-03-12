import React,{useState} from "react";
import SignUpComponent from "./SignUpComponent";
import LoginComponent from "./LoginComponent";

const Header = () => {
  const [open,setOpen]=useState(false)

  const handleState=()=>{
    setOpen(!open);
  }

  const openDialog = () => {
    return (
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog modal-dialog-centered modal-lg">
          <div class="modal-content">
            <div
              class="modal-header"
              style={{
                width: "auto",
                height: 50,
                background: "#EFFFF4",
                fontSize: 14,
                fontWeight: 500,
                color: "#008A45",
                textAlign: "center",
              }}
            >
              <div style={{ marginLeft: 80 }}>
                {" "}
                Let's learn, share & inspire each other with our passion for
                computer engineering. Sign up now 🤘🏼
              </div>

              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-body" style={{ fontFamily: "IBM Plex Sans" }}>
              <div class="container">
                <div
                  class="row"
                  style={{ display: "flex", alignItems: "center" }}
                >
                  {open ? (
                    <div
                      class="col-6"
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Sign In
                    </div>
                  ) : (
                    <div
                      class="col-6"
                      style={{
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "left",
                      }}
                    >
                      Create Account
                    </div>
                  )}
                  <div
                    class="col-6"
                    style={{
                      fontSize: 14,
                      fontWeight: 500,
                      display: "flex",
                      justifyContent: "flex-end",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    {open ? (
                      <>
                        <div>Don’t have an account yet?</div>
                        <button
                          type="button"
                          class="btn btn-light"
                          style={{
                            marginLeft: 5,
                            marginBottom: 2,
                            fontWeight: 600,
                            color: "blue",
                            fontSize: 14,
                          }}
                          onClick={handleState}
                        >
                          {" "}
                          Create new for free!
                        </button>
                      </>
                    ) : (
                      <>
                        <div>Already have an account?</div>
                        <button
                          type="button"
                          class="btn btn-light"
                          style={{
                            marginLeft: 5,
                            marginBottom: 2,
                            fontWeight: 600,
                            color: "blue",
                            fontSize: 14,
                          }}
                          onClick={handleState}
                        >
                          {" "}
                          Sign In
                        </button>
                      </>
                    )}
                  </div>
                </div>

                <div class="row">
                  {open ? <LoginComponent /> : <SignUpComponent />}

                  <div class="col-6">
                    <img src="/account.svg" width="320" height="340" />
                    {open ? (
                      <></>
                    ) : (
                      <div style={{ fontSize: 11, textAlign: "right" }}>
                        By signing up, you agree to our Terms & conditions,
                        Privacy policy
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <nav class="navbar navbar-expand-lg navbar-light" style={{ height: 72 }}>
      <div class="container-fluid">
        <div class="container text-center">
          <div
            class="row"
            style={{
              display: "flex",
              alignItems: "center",
              fontFamily: "IBM Plex Sans, sans-serif",
            }}
          >
            <div class="col-4">
              <a class="navbar-brand" href="#">
                <img src="/logo.svg" alt="" width="162" height="24"></img>
              </a>
            </div>

            <div
              class="col-4"
              style={{
                width: 320,
                height: 42,
                borderRadius: 21,
                backgroundColor: "#F2F2F2",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  color: "#5C5C5C",

                  fontSize: 14,
                }}
              >
                <i className="bi bi-search" width="22" height="22"></i>
               
                  <span style={{ marginLeft: 20 }}>
                    {" "}
                    Search for your favorite groups in ATG
                  </span>
                
              </div>
            </div>

            <div
              class="col-4"
              style={{
                color: "#2E2E2E",
                fontSize: 16,
              }}
            >
              <button
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                type="button"
                class="btn btn-light"
              >
                Create account.{" "}
                <span style={{ color: "blue" }}>It’s free!</span>
              </button>
            </div>
            {openDialog()}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;

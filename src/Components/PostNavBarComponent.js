import React,{useState} from 'react';

const PostNavBarComponent = (props) => {

const [changeBtn,setChangeBtn]=useState(false);

  const handleJoinGroup=()=>{
    setChangeBtn(!changeBtn);
   
 props.onChange(true);
    
  }

  return (
    <div
      style={{
        width: 1040,
        position: "relative",
        top: 50,
        left: 220,
        fontSize: 14,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <div>
        <ul class="nav">
          <li class="nav-item">
            <a
              class="nav-link active"
              style={{ color: "#000", fontSize: 16 }}
              aria-current="page"
              href="#"
            >
              All Posts(32)
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color: "#8A8A8A" }}>
              Article
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{ color: "#8A8A8A" }}>
              Event
            </a>
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              style={{ color: "#8A8A8A" }}
            >
              Education
            </a>
          </li>

          <li class="nav-item">
            <a
              class="nav-link"
              href="#"
              tabindex="-1"
              style={{ color: "#8A8A8A" }}
              aria-disabled="true"
            >
              Job
            </a>
          </li>
        </ul>
      </div>

      <div
        style={{
          position: "absolute",
          display: "flex",
          left: 850,
          fontFamily: "IBM Plex Sans,sans-serif",
        }}
      >
        <button
          type="submit"
          class="btn btn-lg"
          style={{
            width: 143,
            height: 36,
            backgroundColor: "#EDEEF0",
            color: "#000",
            borderRadius: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: 15,
          }}
        >
          <span style={{marginRight:5}}> Write a Post</span> <i className="bi bi-caret-down-fill"></i>
        </button>

        {changeBtn ? (
          <>
            {" "}
            <button
              type="button"
              class="btn btn-outline"
              onClick={handleJoinGroup}
              //  data-bs-toggle="modal"
              // data-bs-target="#exampleModal"
              style={{
                width: 134,
                height: 36,
                color: "#6A6A6B",
                borderRadius: 4,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: 15,
                position: "relative",
                left: 10,
              }}
            >
              <i className="bi bi-arrow-right-square"></i>
              <span style={{ marginLeft: 5 }}> Leave group </span>
            </button>
          </>
        ) : (
          <button
            type="button"
            class="btn btn-primary"
            onClick={handleJoinGroup}
            //  data-bs-toggle="modal"
            // data-bs-target="#exampleModal"
            style={{
              width: 125,
              height: 36,
              color: "#fff",
              borderRadius: 4,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: 15,
              position: "relative",
              left: 10,
            }}
          >
            <i className="bi bi-people-fill"></i>
            <span style={{ marginLeft: 10 }}> Join group </span>
          </button>
        )}
      </div>
    </div>
  );
}

export default PostNavBarComponent;


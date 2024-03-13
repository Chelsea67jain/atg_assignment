import React from "react";
import LocationComponent from "./LocationComponent";

const PostComponent = (props) => {

  return (
    <div
      style={{
        width: 692,
        height: props.heading==="Software Developer"?250:472,
        position: "relative",
        top: 50,
        left: 220,
      
       marginTop:15,

        border: "1px solid #C4C4C4",
        borderRadius: "4px",
      }}
    >
     {props.heading==="Software Developer"?<></>: <img src={`${props.bannerImage}`} width="690" height="220" />}
      <div
        style={{
          fontFamily: "IBM Plex Sans,sans-serif",
          marginTop: 10,
          marginLeft: 10,
        }}
      >
        <div style={{ fontWeight: 500, fontSize: 18 }}>{props.type}</div>
        <div
          style={{
            fontSize: 22,
            width:
              props.heading ===
              "Finance & Investment Elite Social Mixer @Lujiazui"
                ? 700
                : 650,
            marginTop: 10,
            fontWeight: "bold",
            display: "flex",
          }}
        >
          <span
            style={{
              width:
                props.heading ===
                "Finance & Investment Elite Social Mixer @Lujiazui"
                  ? 550
                  : 500,
            }}
          >
            {" "}
            {props.heading}
          </span>
          <span
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width:
                props.heading ===
                "Finance & Investment Elite Social Mixer @Lujiazui"
                  ? 90
                  : 140,
            }}
          >
            <i className="bi bi-three-dots"></i>
          </span>
        </div>

        {props.heading=== "Finance & Investment Elite Social Mixer @Lujiazui" ? (
          <div
            style={{
              fontSize: 15,
              display: "flex",
              width: 400,
              justifyContent: "space-between",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            <div>
              <i className="bi bi-calendar-event"></i> {props.date}
            </div>

            <div>
              <i className="bi bi-geo-alt"></i> {props.location}
            </div>
          </div>
        ) : (
          <div style={{ fontSize: 19, color: "#5C5C5C" }}>
            {props.subheading}
          </div>
        )}

        {props.heading ===
        "Finance & Investment Elite Social Mixer @Lujiazui" ? (
          <div
            style={{
              width: 652,
              marginTop: 10,
              height: 38,
              borderRadius: 8,
              border: "1px solid #A9AEB8",
              color: "#E56135",
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Visit Website
          </div>
        ) : (
          <></>
        )}

        {props.heading === "Software Developer" ? (
          <div
            style={{
              fontSize: 15,
              display: "flex",
              width: 400,
              justifyContent: "space-between",
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            <div>
              <i className="bi bi-calendar-event"></i> {props.company}
            </div>

            <div>
              <i className="bi bi-geo-alt"></i> {props.location}
            </div>
          </div>
        ) : (
          <div></div>
        )}

        {props.heading === "Software Developer" ? (
          <div
            style={{
              width: 652,
              marginTop: 10,
              height: 38,
              borderRadius: 8,
              border: "1px solid #A9AEB8",
              color: "#02B875",
              fontSize: 13,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Apply on Timesjobs
          </div>
        ) : (
          <></>
        )}

        <div
          style={{
            marginTop: 20,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div style={{ fontWeight: "bold", fontSize: 18 }}>
            <img
              src={`${props.image}`}
              style={{ height: 48, width: 48, borderRadius: "50%" }}
            />
            <span style={{ marginLeft: 10 }}>{props.name}</span>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontWeight: 500,
              width: 150,
              fontSize: 14,
              color: "#525252",
            }}
          >
            <i className="bi bi-eye"></i>{" "}
            <span style={{ marginLeft: 10 }}>1.4k views</span>
            <div
              style={{
                marginLeft: 10,
                width: 42,
                height: 36,
                borderRadius: 2,
                backgroundColor: "#f2f2f2",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <i className="bi bi-share-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  );
};

export default PostComponent;

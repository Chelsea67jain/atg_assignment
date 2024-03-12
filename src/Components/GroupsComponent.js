import React from "react";

const GroupsComponent = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 820,
        left: 1070,
        fontSize: 14,
        fontFamily: "IBM Plex Sans,sans-serif",
      }}
    >
      <div style={{ textTransform: "uppercase", letterSpacing: 1 }}>
        <i class="bi bi-hand-thumbs-up-fill"></i> Recommended Groups
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <img
            src="/leisure.jpg"
            width="36"
            height="36"
            style={{ borderRadius: "50%" }}
          />
          <span style={{ marginLeft: 5 }}> Leisure</span>
        </div>
        <div
          style={{
            width: 60,
            height: 24,
            borderRadius: 14,
            background: "#EDEEF0",
            textAlign: "center",
          }}
        >
          Follow
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <img
            src="/activism.jpg"
            width="36"
            height="36"
            style={{ borderRadius: "50%" }}
          />
          <span style={{ marginLeft: 5 }}> Activism</span>
        </div>
        <div
          style={{
            width: 60,
            height: 24,
            borderRadius: 14,
            background: "#EDEEF0",
            textAlign: "center",
          }}
        >
          Follow
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <img
            src="/mba.jpg"
            width="36"
            height="36"
            style={{ borderRadius: "50%" }}
          />
          <span style={{ marginLeft: 5 }}>MBA</span>
        </div>
        <div
          style={{
            width: 60,
            height: 24,
            borderRadius: 14,
            background: "#EDEEF0",
            textAlign: "center",
          }}
        >
          Follow
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 20,
          alignItems: "center",
        }}
      >
        <div>
          {" "}
          <img
            src="/philosophy.jpg"
            width="36"
            height="36"
            style={{ borderRadius: "50%" }}
          />
          <span style={{ marginLeft: 5 }}>Philosophy</span>
        </div>
        <div
          style={{
            width: 60,
            height: 24,
            borderRadius: 14,
            background: "#EDEEF0",
            textAlign: "center",
          }}
        >
          Follow
        </div>
      </div>
    </div>
  );
};

export default GroupsComponent;

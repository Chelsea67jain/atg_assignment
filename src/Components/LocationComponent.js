import React from 'react'

const LocationComponent = () => {
  return (
    <div
      style={{
        marginTop: 20,
        position: "absolute",
        top: 800,
        left: 1070,
        bottom: 1000,
        width: 243,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:"center",
          fontFamily: "IBM Plex sans,sans-serif",
        }}
      >
        <i className="bi bi-geo-alt-fill"> </i>
        <input
          type="text"
          className="form-control border-0" // added border-0 class to remove border
          placeholder="Enter your location"
          style={{ fontFamily: "IBM Plex sans,sans-serif" }}
        />
        <i className="bi bi-pencil-fill"></i>
      </div>

      <hr style={{margin:5}}/>
      <div
        style={{
          display: "flex",
          fontSize: 12,
          fontWeight: 300,
          color: "grey",
        }}
      >
        <div className="bi bi-exclamation-circle-fill"></div>
        <span style={{ marginLeft: 2, width: 210 }}>
          Your location will help us serve better and extend a personalised
          experience.
        </span>
      </div>
    </div>
  );
}

export default LocationComponent

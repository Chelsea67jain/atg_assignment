import React from 'react'

const LocationComponent = () => {
  return (
    <div
      style={{
        marginTop: 20,
        position: "absolute",
        top: 680,
        left: 1070,
        bottom: 1000,
        width: 243,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",

          fontFamily: "IBM Plex sans,sans-serif",
        }}
      >
        <div className="bi bi-geo-alt-fill"> Enter your location</div>

        <i className="bi bi-search"></i>
      </div>
      <hr />
      <div style={{ display:'flex',fontSize: 12,fontWeight:300,color:'grey' }}>
        <div className="bi bi-exclamation-circle-fill"></div>
        <span style={{ marginLeft:2,width:210 }}>
          Your location will help us serve better and extend a personalised
          experience.
        </span>
      </div>
    </div>
  );
}

export default LocationComponent

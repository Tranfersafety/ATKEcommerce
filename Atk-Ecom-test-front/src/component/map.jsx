import React, { useState, useCallback } from "react";
import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";

function Mapgoogle({ setFormData }) {
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const lat = import.meta.env.VITE_LAT;
  const lng = import.meta.env.VITE_LNG;

  return (
    <APIProvider apiKey={apiKey}>
      <Map
        style={{ width: "744px", height: "400px" }}
        defaultCenter={{ lat: lat, lng: lng }}
        defaultZoom={18}
        gestureHandling={"greedy"}
        disableDefaultUI={true}
      >
        <Marker position={{ lat: lat, lng: lng }} />
      </Map>
    </APIProvider>
  );
}

export default Mapgoogle;

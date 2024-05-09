"use client";

import React, { useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";

export const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initializeMap = async () => {
      const loader = new Loader({
        // TODO: Update apiKey to use process.env.NEXT_PUBLIC_MAPS_API_KEY
        // Tester branch
        apiKey: "AIzaSyCo4mymeRBelldRSbRsM0UeeZ-oWrPkVPk",
        version: "weekly",
      });
      console.log(process.env.NEXT_PUBLIC_MAPS_API_KEY);
      console.log("Test");
      // Import initial map library
      const { Map } = await loader.importLibrary("maps");

      const location = {
        lat: 40,
        lng: -101,
      };

      const options: google.maps.MapOptions = {
        center: location,
        zoom: 5,
        mapId: "NEXT_MAPS",
      };

      const map = new Map(mapRef.current as HTMLDivElement, options);
    };

    initializeMap();
  }, []);

  return (
    <div>
      <div
        style={{
          width: "850px",
          height: "750px",
        }}
        ref={mapRef}
      ></div>
    </div>
  );
};

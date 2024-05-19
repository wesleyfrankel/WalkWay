"use client";
import { useEffect, useState } from "react";
import { useMapsLibrary, useMap } from "@vis.gl/react-google-maps";

function Directions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] =
    useState<google.maps.DirectionsService>();
  const [directionsRenderer, setDirectionsRenderer] =
    useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState(0);
  const selected = routes[routeIndex];
  const leg = selected?.legs[0];

  // Initialize directions service and renderer
  useEffect(() => {
    if (!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRenderer(new routesLibrary.DirectionsRenderer({ map }));
  }, [routesLibrary, map]);

  // Use directions service
  useEffect(() => {
    if (!directionsService || !directionsRenderer) return;

    directionsService
      .route({
        origin: "100 Front St, Toronto ON",
        destination: "500 College St, Toronto ON",
        travelMode: google.maps.TravelMode.WALKING,
        provideRouteAlternatives: true,
      })
      .then((response) => {
        directionsRenderer.setDirections(response);
        setRoutes(response.routes);
      });

    return () => directionsRenderer.setMap(null);
  }, [directionsService, directionsRenderer]);

  // Update direction route
  useEffect(() => {
    if (!directionsRenderer) return;
    directionsRenderer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRenderer]);

  if (!leg) return null;

  return (
    <div className="directions">
      <h2>{selected.summary}</h2>
      <p>
        {leg.start_address.split(",")[0]} to {leg.end_address.split(",")[0]}
      </p>
      <p>Distance: {leg.distance?.text}</p>
      <p>Duration: {leg.duration?.text}</p>
    </div>
  );
}

export default Directions;

// import React, { useEffect } from "react";
// import { Loader } from "@googlemaps/js-api-loader";

// export const Map = () => {
//   const mapRef = React.useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const initializeMap = async () => {
//       const loader = new Loader({
//         // TODO: Update apiKey to use process.env.NEXT_PUBLIC_MAPS_API_KEY
//         apiKey: "AIzaSyCo4mymeRBelldRSbRsM0UeeZ-oWrPkVPk",
//         version: "weekly",
//       });
//       console.log(process.env.NEXT_PUBLIC_MAPS_API_KEY);

//       // Import initial map library
//       const { Map } = await loader.importLibrary("maps");

//       const location = {
//         lat: 40,
//         lng: -101,
//       };

//       const options: google.maps.MapOptions = {
//         center: location,
//         zoom: 5,
//         mapId: "NEXT_MAPS",
//       };

//       const map = new Map(mapRef.current as HTMLDivElement, options);
//     };

//     initializeMap();
//   }, []);

//   return (
//     <div>
//       <div
//         style={{
//           width: "850px",
//           height: "750px",
//         }}
//         ref={mapRef}
//       ></div>
//     </div>
//   );
// };

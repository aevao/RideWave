"use client";
import { Loader } from "@googlemaps/js-api-loader";
import GoogleMapReact from "google-map-react";
import React, { useEffect } from "react";

const Map = () => {
  const mapRef = React.useRef<HTMLDivElement>(null);
  const mapKey = process.env.NEXT_PUBLIC_MAP_KEY;

  useEffect(() => {
    
    const initMap = async () => {
      const loader = new Loader({
        apiKey :  process.env.NEXT_PUBLIC_MAP_KEY!, // или ваш ключ API
        version: "weekly",
      });
      
      const { Map } = await loader.importLibrary('maps')

      const positions = {
        lat: 41.881832,
        lng: -87.623177
      }

      const mapOptions : google.maps.MapOptions = {
        center: positions,
        zoom: 15,
        zoomControl: false,
        fullscreenControl: false,
        keyboardShortcuts: false,
        clickableIcons: false,
        scrollwheel: false

      }

      const map = new Map(mapRef.current as HTMLDivElement,mapOptions)
    }
    initMap()
  }, []);

  return (
    <div className="h-screen w-full" ref={mapRef}>
      {/* <GoogleMapReact
        bootstrapURLKeys={{ key: String(mapKey) }}
        defaultCenter={{ lat: 50.1109221, lng: 8.6821267 }}
        defaultZoom={13}

        // options  = {2}
      /> */}
    </div>
  );
};

export default Map;

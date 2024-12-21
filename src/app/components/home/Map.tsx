"use client";
import { useActions } from "@/app/hooks/useActions";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { Loader } from "@googlemaps/js-api-loader";
import GoogleMapReact from "google-map-react";
import React, { FC, useEffect, useState } from "react";
import { optionsList } from "./data";

interface IImap {
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
  // map : google.maps.MapType
  // maps : any
}

const Map: FC<IImap> = ({render, setRender}) => {
  const [MAP, setMAP] = useState<IImap>({} as IImap);
  const mapRef = React.useRef<HTMLDivElement>(null);
  const mapKey = process.env.NEXT_PUBLIC_MAP_KEY;
  const {from, to,travelTime} = useTypedSelector((state) => state.taxi);
  const {setTravelTime, setSelectedOption} = useActions()
  const [isExistRoute, setIsExistRoute] = useState(false);


  useEffect(() => {
    const initMap = async () => {
   
      try {
        const loader = new Loader({
          apiKey: process.env.NEXT_PUBLIC_MAP_KEY!,
          version: 'weekly',
          language: 'en', // Язык карты — английский
          region: 'US', // Регион карты — США
        });
    
        await loader.load(); // Загружаем библиотеку, но не пытаемся деструктурировать
        const { maps } = google;
    
        // Инициализируем карту
        const defaultPosition = {
          lat: 41.881832,
          lng: -87.623177,
        };
    
        const selectedPosition = from?.location?.lat
          ? { lat: from.location.lat, lng: from.location.lng }
          : defaultPosition;
    
        const mapOptions: google.maps.MapOptions = {
          center: selectedPosition,
          zoom: 13,
          backgroundColor: '#e0e0e0',
          zoomControl: true,
          fullscreenControl: false,
          keyboardShortcuts: false,
          clickableIcons: false,
          scrollwheel: true,
          mapTypeControl: false,
          streetViewControl: false,
        };
    
        const map = new maps.Map(mapRef.current as HTMLDivElement, mapOptions);
    
        // Построение маршрута
        if (from?.location && to?.location) {
          const directionsService = new maps.DirectionsService();
          const directionsRenderer = new maps.DirectionsRenderer();
          directionsRenderer.setMap(map);
    
          const request: google.maps.DirectionsRequest = {
            origin: { lat: from.location.lat, lng: from.location.lng },
            destination: { lat: to.location.lat, lng: to.location.lng },
            travelMode: google.maps.TravelMode.DRIVING,
          };
    
          directionsService.route(request, (result, status) => {
            if (status === google.maps.DirectionsStatus.OK) {
              directionsRenderer.setDirections(result);
              const durationSec = result?.routes[0].legs[0].duration?.value
              if(durationSec){
                setTravelTime(Math.ceil(durationSec/60))
                setSelectedOption(optionsList[0]._id)

              }
            } else {
              console.error('Failed to fetch directions:', status);
            }
          });
        }
    
        setRender(false);
      } catch (error) {
        console.error('Error initializing the map:', error);
      }
    };
    initMap();
  }, [render, from, to]);
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

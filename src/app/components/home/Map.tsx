"use client";
import { useTypedSelector } from "@/app/hooks/useTypedSelector";
import { Loader } from "@googlemaps/js-api-loader";
import GoogleMapReact from "google-map-react";
import React, { FC, useEffect, useState } from "react";

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
  const {from, to} = useTypedSelector((state) => state.taxi);
  const [isExistRoute, setIsExistRoute] = useState(false);
  // const renderWay = () => {
  //   const {maps, map} = MAP!
  //   if(typeof maps.DirectionsRenderer === 'function'){
  // } 

  // useEffect(() => {
  //   if(from.location?.lat && to.location?.lat && MAP?.map && MAP?.maps && !isExistRoute){
  //     renderWay()
  //   }
  // },[from,to,isExistRoute])

  useEffect(() => {
    
    const initMap = async () => {
      const loader = new Loader({
        apiKey :  process.env.NEXT_PUBLIC_MAP_KEY!, // или ваш ключ API
        version: "weekly",
        language: "en", // Устанавливаем язык на английский
      
      });
      
      const { Map } = await loader.importLibrary('maps')

      const positions = {
        lat: 41.881832,
        lng: -87.623177
      }
      const selectedPosition = from.location?.lat?{
        lat: from.location.lat,
        lng: from.location.lng
      } : positions

      const mapOptions: google.maps.MapOptions = {
        center: selectedPosition,
        zoom: 13,
        backgroundColor: '#e0e0e0', // Общий фон карты
        zoomControl: false,
        fullscreenControl: false,
        keyboardShortcuts: false,
        clickableIcons: false,
        scrollwheel: false,
        mapTypeControl: false,
        streetViewControl: false,
     
       
      };
      

      const map = new Map(mapRef.current as HTMLDivElement,mapOptions)
      setRender(false)
    }
    initMap()
  }, [render]);

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

declare module "google-map-react" {
    import React from "react";
  
    export interface BootstrapURLKeys {
      key: string;
    }
  
    export interface MapProps {
      bootstrapURLKeys: BootstrapURLKeys;
      defaultCenter: {
        lat: number;
        lng: number;
      };
      defaultZoom: number;
      [key: string]: any; // Для других опциональных свойств
    }
  
    const GoogleMapReact: React.FC<MapProps>;
    export default GoogleMapReact;
  }
  
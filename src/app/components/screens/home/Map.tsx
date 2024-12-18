'use client';

import dynamic from 'next/dynamic';

const GoogleMapReact = dynamic(() => import('google-map-react'), { ssr: false });

const Map = () => {
  return (
    <div className="h-screen w-full">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.MAP_KEY! }}
        defaultCenter={{ lat: 59.95, lng: 30.33 }}
        defaultZoom={11}
      />
    </div>
  );
};

export default Map;

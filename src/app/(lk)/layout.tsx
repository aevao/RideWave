'use client';
import React, { useEffect, useState } from 'react';
import Script from 'next/script';
import Loader from '../components/ui/Loader';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);



  return (
    <div className="m-auto relative overflow-hidden">
      <div>
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {children}
          </>
        )}
        <Script
          strategy="beforeInteractive"
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_MAP_KEY}&libraries=places`}
        />
      </div>
    </div>
  );
};

export default DashboardLayout;

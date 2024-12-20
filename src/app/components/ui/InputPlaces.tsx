"use client";
import React, { FC, useEffect, useState, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import cn from "classnames";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from "react-places-autocomplete";
import { Coords } from "google-map-react";

interface IInputPlaces {
  cbSuccess: (address: string, location:  Coords ) => void;
  type: "from" | "to";
}

const InputPlaces: FC<IInputPlaces> = ({ cbSuccess, type }) => {
  const [address, setAddress] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const isFrom = type === "from";
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSelect = async (address: string) => {
    try {
      const results = await geocodeByAddress(address);
      const location = await getLatLng(results[0]);
      cbSuccess(address, location);
      setAddress(address);
    } catch (error) {
      console.error("Error during geocoding:", error);
      setError("Failed to get location");
    }
  };

  const setFocus = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    if (isFrom) {
      setFocus();
    }
  }, [isFrom]);

  return (
    <div>
      <PlacesAutocomplete value={address} onChange={setAddress} onSelect={handleSelect}>
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className={cn("shadow-lg", { "mb-5": isFrom })}>
            <div
              className="py-4 px-5 bg-white rounded-lg flex items-center"
              style={
                suggestions.length
                  ? { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 }
                  : {}
              }
            >
              <FiSearch
                color={isFrom ? "#ffbc00" : "#615f5d"}
                className="mr-3"
                size={26}
              />
              <input
                {...getInputProps({
                  ref: inputRef, // Убедитесь, что ref работает
                  placeholder: isFrom ? "Where from?" : "Where to",
                  className: "outline-none w-full text-gray-800",
                })}
              />
            </div>
            <div
              style={{ color: "rgb(28 36 48)" }}
              className={cn(
                "absolute w-full h-0 overflow-y-auto rounded-b-lg z-10",
                {
                  "h-48": suggestions.length || loading,
                }
              )}
            >
              {loading && <div className="p-2 bg-white">Loading...</div>}
              {suggestions.map((suggestion, idx) => {
                const className = suggestion.active
                  ? "bg-gray-100"
                  : "bg-white";
                return (
                  <div
                  {...getSuggestionItemProps(suggestion, { className })}
                  className={`cursor-pointer p-3 ${className}`}
                  key={`loc-${idx}`}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      {error && <div className="text-red-500 mt-2">{error}</div>}
    </div>
  );
};

export default InputPlaces;

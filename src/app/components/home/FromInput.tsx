"use client";

import React, { FC } from "react";
import InputPlaces from "../ui/InputPlaces";
import { Coords } from "google-map-react";
import { useActions } from "@/app/hooks/useActions";
interface IIRender {
  render: boolean;
  setRender: React.Dispatch<React.SetStateAction<boolean>>;
}
const FromInput : FC<IIRender> = ({setRender}) => {

  const {setFrom,setTo} = useActions()
  const cbSuccess = (address: string,location: Coords) => {
    setFrom({location,description:address})
    setTo("")
    setRender(true)
  };

  return (
    <InputPlaces cbSuccess={cbSuccess} type='from' />
  );
};

export default FromInput;
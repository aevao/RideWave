'use client';
import RootLayout from "@/app/layout"
import Map from "./Map"
import FromInput from "./FromInput"
import ToInput from "./ToInput"
import Options from "./Options"
import { useState } from "react"
import OrderButton from "./OrderButton";


const Home = () => { 
  const [render,setRender] = useState(false)
  return (
    <div  >
       
            <Map render ={render} setRender={setRender}/>
        <div className="absolute   w-3/12 bottom-10 right-10">

            <FromInput setRender={setRender} render={render}/>
            <ToInput />
            <Options/>
            <OrderButton/>
        </div>
    </div>
  )
}

export default Home
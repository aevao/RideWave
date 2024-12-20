import { Coords } from "google-map-react"

export type Typefrom = {
    location: Coords
    description: string
}


export type TypeInitialState = {
    from: Typefrom 
    to: Typefrom
    travelTime: number
    selectedOption: string
}
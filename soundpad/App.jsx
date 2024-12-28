import React from "react"
import padsData from "./pads"
import Pad from "./Pad"
export default function App(props) {
    const [ pads, setPads ] = React.useState(padsData)
    function toggle(id){
        setPads(prevPads => prevPads.map(pad =>
            {return pad.id === id ? {...pad, on: !pad.on} : pad}))
    }
   
    const buttonElements = pads.map((pad) =>
    (
        <Pad key={pad.id} color={pad.color} on={pad.on} />
    ))
    
    return (
        <main>
            <div className="pad-container">
                
            {buttonElements}
            </div>
        </main>
    )
}

import React from "react"
export default function Pad(props) {
    const [on, setOn] = React.useState(props.on)

    function handleClick() {
        setOn(prevon => !prevon)
    }
    const styles={
        backgroundColor: props.color

    }
    return (
        
        <button style={styles}
        className={on ? "on" : "undefined"}
        onClick={handleClick}
        ></button>
    )
}
import React from "react"
import {useSpring, animated} from 'react-spring'


const OtaYhteyttä = function (){
    const props = useSpring({opacity: 1, from: {opacity: 0}, config:{duration: 1000}})
    return (
        <animated.div className="yhteys" style={props}> 
            <h2>Ota yhteyttä <span>atomyhteys@hotmail.com</span></h2>
        </animated.div>

    )
}

export default OtaYhteyttä;
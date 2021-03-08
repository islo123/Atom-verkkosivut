import React from "react"
import {useSpring, animated} from 'react-spring'

const Palvelumme = function (){

     const props = useSpring({opacity: 1, from: {opacity: 0}, config:{duration: 1000}})
    return (
       
       
            <animated.div className="text" style={props}> 
                
                <div>
                    <h2 className="first-h2">

                        Hei! Olen 26-vuotias mies, juuri valmistunut datanomiksi ja pienyrittäjä. Yritykseni keskittyy verkkosivun tekemiseen, jotka ovat responsiivisia (toimi kaikilla laitteilla), ja sivujen tekemiseen käytän Reactia. 
                    </h2>

                
                </div>
                <div>
                    <h2 className="second-h2">

                        Tavoitteeni töiden suhteen ovat korkealla, joten työni laatu on minulle tärkeä. Teen toiveesi mukaiset verkkosivut, ja hinnat alkaen 75e. 
                    </h2>

                
                </div>
                <div>
                    <h2 className="third-h2">

                        Laita minulle sähköpostia, niin voimme keskustella lisää sivustosta ja hinnoista.
                    </h2>
                </div>
                <div className="circle2"></div>
          </animated.div>
        
    )
}

export default Palvelumme
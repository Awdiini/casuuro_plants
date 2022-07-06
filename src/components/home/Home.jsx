import React from "react"
import Awards from "./awards/Awards"
import CallToAction from "./CallToAction/CallToAction"
import ContactUs from "./CallToAction/test"
import Featured from "./featured/Featured"
import Hero from "./hero/Hero"
import Thero from "./hero/Thero"
import Location from "./location/Location"
import Price from "./price/Price"
import Products from "./recent/Products"
import Recent from "./recent/Recent"
import Team from "./team/Team"

const Home = () => {
  return (
    <>
      <Thero />
      <Products/>
      <CallToAction/>
   
      {/* <Featured /> */}
     
      {/* <Recent /> */}
      {/* <Awards />
      <Location />
      <Team />
      <Price /> */}
    </>
  )
}

export default Home

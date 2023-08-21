
import Section from "../Components/Homepage/Section";
import FAQ from "../Components/Homepage/FAQ";
import React from "react";
import { Outlet } from "react-router-dom";
function Home (){
    return(
        <div>
            
            <Section/>
            <FAQ />
            
            <Outlet />
        </div>
            
        
    )
}


export default Home;
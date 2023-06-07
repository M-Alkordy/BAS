import React from "react";
import HeroCaseStudies from "../components/HeroCaseStudies/HeroCaseStudies";
import Filternav from "./Filternav/Filternav";
import Cards from "./Cards/Cards";
import Ourcustomers from "./Ourcustomers/Ourcustomers";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";



function Case(){
    return(
            <div className="home">
            <Navbar />
            <HeroCaseStudies /> 
            <Ourcustomers /> 
            <Filternav />
            <Cards /> 
            <Footer/>
            </div>
        )
};

export default Case
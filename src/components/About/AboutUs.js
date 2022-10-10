import React from "react";
import logo from '../../Image/Aboutus1.png';
import { Button } from "reactstrap";

const Aboutus=()=>{
    return(
        <div  className="container" style={{paddingTop:100}}>
            <h1 className="text-center my-5">ABOUT US</h1>
            <p className="text-center" style={{fontWeight:"600"}}>
                One stop solution for your E-Waste collection and recycling, we oversee end to end E-Waste<br/>
                Management;connect with us and handover you're E-Waste for safe and scientific way of recycling<br/>
                process.We will also provide E-Waste collection certificate.
            </p>
            <div>
                <div className="first-child">
                    <img src={logo} alt="E-Waste" style={{width:"400px"}}></img>
                </div>
                <div className="second-child" >
                   <p>
                    We are certified MPCB E-Waste Management Recycler Company.<br/><br/>
                    E-waste is toxic and hazardous if not handled in the right way. 
                    Our main goal is to asset the world, band together with our clients and
                    handle the quickest developing waste stream on our planet and address environmental and sustainability
                    challenges in energy, water and waste. Backyard techniques utilized as a part of treatment of e-waste 
                    has turned into a major source of ground water and air contamination globally. Through scientific
                    recycling, a large portion of the resources and valuable metals in the e-waste stream are recouped and reused.
                    <br/><br/>
                    We trust organizations can be profitable, supportable and environmentally responsible. 
                    This implies enhancing our customers, energy efficiency, better dealing with their 
                    water and waste water, and turning e-waste into Gold. Go along with us in our 
                    transformation to make a difference today and divert e-waste ending up in landfills.
                    </p> 
                </div>
            </div>
            <div style={{clear:"both"}}></div>
        </div>
    );
};

export default Aboutus;
import React from "react";
import ReactPlayer from "react-player";

const video=()=>{
    return(
        <div className="container" style={{paddingTop: 150,height:"100%" }}>
            <div className="video-firstchild">
                <ReactPlayer 
                    width='480px'
                    height='240px'
                    controls
                    url={"https://youtu.be/90ixtgA9uMs"}
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')}
                />    
            </div>
            <div className="video-secondchild">
                <h1 className="text-center my-5px">WHAT IS E-WASTE?</h1>
                <p style={{fontWeight:"600"}}>
                    E-waste incorporates any family unit or business thing containing hardware
                    or electrical segments with either power or battery supply.
                </p>
                <ul style={{fontWeight:"600"}}>
                    <li>Conserves natural resources.</li>
                    <li>Protects your surroundings.</li>
                    <li>Refurbished equipment are reused.</li>
                    <li>Saves landfill space.</li>
                    <li>Creates new markets for the valuable components that are dismantled.</li>
                </ul>
            </div>
            <div style={{clear:"both"}} className="text-center">

            </div>
        </div>
    );
};

export default video;
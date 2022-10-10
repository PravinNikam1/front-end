import React from "react";
import card2 from "../../images/Blog.jpg";
import card3 from "../../images/card3.webp"

function Blog(){
    return(
      <body  style={{paddingTop: 94 }} > 
      <div className="alert alert-primary" role="alert" >
        <div style={{height:"50px"}}></div>
        <h1>Blogging</h1>

        <div class="row row-cols-1 row-cols-md-3 g-3">
        <div class="col">
    <div class="card">
      <img src={card3} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Benefits of Recycling Electronic Waste.</h5>
        <p class="card-text">1. Helps Cleanse the Air, Soil, and Water.</p>
        <p class="card-text">2.Reduces air pollution.</p>
        <p class="card-text">3.Protects the environment from hazardous substances.</p>
        <p class="card-text">4.It Reduces the Amount of Toxic Materials.</p>
        <p class="card-text">5.Important for future generations.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={card2} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">How to Recycle e-waste?</h5>
        <p class="card-text">The best way to dispose of unwanted electronics is by disposing them off at a recycling centre. Before you recycle any old hard drives, make sure you’ve wiped the contents and then make sure it goes to a facility that will dispose of it correctly.</p>
        <p class="card-text">The fight against e-waste is a global issue, and we need new strategies to deal with it. To reduce the amount of e-waste, make sure that you recycle old items rather than throwing them in the trash.</p>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img src={card3} className="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">Challenges for E-waste Management in India </h5>
        <p class="card-text">E-waste recycling in India is primarily an informal sector activity. There are thousands of poor households making a living by salvaging materials from waste dumps. The common recycling practices for middle class urban households, particularly for waste paper, plastic, clothing and metal, is to sell out to small scale informal sector buyers.
{/* A lot of people in India turn to e-waste management as a way to provide for their families. However, there is a different situation in advanced countries where only authorized personnel are allowed to modify and repair electronic devices which may then be refurbished or dismantled. There is also no concept of consumers paying for disposal of the e-waste they generate. */}
</p>
      </div>
    </div>
  </div>
  </div>
            
        </div>
        </body>
    )
}

export default Blog;
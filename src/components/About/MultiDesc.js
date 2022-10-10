import React from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';
import firstimg from "../../Image/save.jpg";
import secondimg from "../../Image/impact.jpg";
import thirdimg from "../../Image/swach.jpg";

const MultiDesc=()=>{
    return(
    <CardGroup style={{clear:"both",paddingTop: 40}} className="my-5 mx-5">
      <Card style={{marginRight:"20px",border:"2px solid black",backgroundColor:"azure"}}>
        <CardImg top width="100%" src={firstimg} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{fontWeight:"bolder"}}>E-WASTE - </CardTitle>
          <CardSubtitle style={{fontWeight:"bold"}}>SAVE-ENVIRONMENT</CardSubtitle>
          <CardText style={{fontWeight:"600" ,textAlign:"justify"}}>
            Recycling the e-waste saves space in landfills and prevents the environmental pollution caused by the toxins.
            Recycling also reduces the need for landfills. Goods made from recycled materials use less 
            water, create less pollution, and uses less energy. E-wastes have a huge impact on human beings & the environment. 
            The solution: For   E-waste is a recycling
          </CardText>
        </CardBody>
      </Card>
      <Card style={{marginRight:"20px",border:"2px solid black" ,backgroundColor:"azure"}}>
        <CardImg top width="100%" src={secondimg} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{fontWeight:"bolder"}}>E-WASTE - </CardTitle>
          <CardSubtitle style={{fontWeight:"bold"}}>IMPACT ON SOCIETY</CardSubtitle>
          <CardText style={{fontWeight:"600",textAlign:"justify"}} >
            When e-waste is exposed to the heat, toxic chemicals are released into the air damaging the atmosphere & Polluted air; 
            this is one of the biggest environmental impacts of e-waste. Those toxic materials can then seep into 
            the groundwater, affecting both land and sea animals. Electronic waste can also contribute to air 
            pollution.
          </CardText>
        </CardBody>
      </Card>
      <Card style={{marginRight:"20px",border:"2px solid black ",backgroundColor:"azure"}}>
        <CardImg top width="100%" src={thirdimg} alt="Card image cap" />
        <CardBody>
          <CardTitle style={{fontWeight:"bolder"}}>E-WASTE - </CardTitle>
          <CardSubtitle style={{fontWeight:"bold"}}>SWACHH BHARAT</CardSubtitle>
          <CardText style={{fontWeight:"600",textAlign:"justify"}} >
            E-waste consists of waste of electrical & electronic equipment that are to be rejected. India generates 
            about 1.5 Million tonnes of E-waste each year. UN predicted said that, by 2020 e-waste from computers 
            would jump by 500 percent and from discarded mobile phones would be 18 times higher than 2007 level
            in India.
          </CardText>
        </CardBody>
      </Card>
    </CardGroup>
   
    );
};

export default MultiDesc;
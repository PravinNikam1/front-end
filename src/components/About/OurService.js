import React from "react";
import { Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody } from 'reactstrap';

const Ourservice=()=>{
    return(
        <div style={{clear:"both",paddingTop:100}} className="container-fluid">
            <h2 style={{fontWeight:"bold",paddingTop:"20px"}} className="text-center">OUR-SERVICES</h2>
            <p className="text-center" style={{fontWeight:"600"}}>
                We believe in giving satisfaction to the great team who is associating with us through our
                exclusive and<br/>assured services, we have end to end customer service support.
            </p>
            <CardGroup style={{clear:"both"}} className="my-5 mx-5">
                <Card style={{marginRight:"20px",backgroundColor:"azure"}}>
                    <CardBody>
                        <CardTitle style={{fontWeight:"bolder"}}>WASTE-COLLECTION</CardTitle>
                        <CardText style={{fontWeight:"600" ,textAlign:"justify"}}>
                        Electronic Waste Collection, Management, Recycling, Scrap Center, Old Computer Buyers & Battery Recycling. Etc
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{marginRight:"20px",backgroundColor:"azure"}}>
                    <CardBody>
                        <CardTitle style={{fontWeight:"bolder"}}>RECYCLING-SERVICE</CardTitle>
                        <CardText style={{fontWeight:"600" ,textAlign:"justify"}}>
                        Collection, transportation and recycling of wide-ranging e-waste materials.
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{marginRight:"20px",backgroundColor:"azure"}}>
                    <CardBody>
                        <CardTitle style={{fontWeight:"bolder"}}>DE-BONDING-SERVICE</CardTitle>
                        <CardText style={{fontWeight:"600" ,textAlign:"justify"}}>
                        We also provide service for the de-bonding of custom bonded assets on client requests.
                        </CardText>
                    </CardBody>
                </Card>
            </CardGroup>
            <CardGroup style={{clear:"both"}} className="my-5 mx-5">
                <Card style={{marginRight:"20px",backgroundColor:"azure"}}>
                    <CardBody>
                        <CardTitle style={{fontWeight:"bolder"}}>BRAND VALUE PROTECTION</CardTitle>
                        <CardText style={{fontWeight:"600" ,textAlign:"justify"}}>
                          Guide customers on legal procedures and assist them with the comprehensive documentation
                          for e-waste declaration. Salvage usable parts.
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{marginRight:"20px",backgroundColor:"azure"}}>
                    <CardBody>
                        <CardTitle style={{fontWeight:"bolder"}}>CERTIFICATION</CardTitle>
                        <CardText style={{fontWeight:"600" ,textAlign:"justify"}}>
                            Data wiping, Degaussing, Destruction Certificate will be provided to the customer, 
                            according to e-waste materials and requirements.
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={{marginRight:"20px",backgroundColor:"azure"}}>
                    <CardBody>
                        <CardTitle style={{fontWeight:"bolder"}}>DATA SAFTEY & DESTRUCTION</CardTitle>
                        <CardText style={{fontWeight:"600" ,textAlign:"justify"}}>
                            We guarantee that there is no leakage of information from the e-waste we receive at our office.
                        </CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    );
};

export default Ourservice;
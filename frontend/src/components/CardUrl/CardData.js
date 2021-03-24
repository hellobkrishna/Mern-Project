import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  Button,
} from "reactstrap";

const CardData = ({ data }) => {
  console.log(data, "This is props");
  return (
    <div>
      <Row>
        <Col>
          {data?.map((meta) => (
            <>
              <Card key={meta.description}>
            
                <CardImg
                  top
                  width="100%"
                  src={meta.image}
                  alt="Card image cap"
                />
                
                <CardBody>
                  <CardTitle tag="h5">
                    Title: {meta.title ? meta.title : "Title not available"}
                  </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    Author: {meta.author ? meta.author : "Author not available"}
                  </CardSubtitle>
                  <CardText>
                    Description:{" "}
                    {meta.description
                      ? meta.description
                      : "Desciption not available"}
                  </CardText>
                  {/* <Button>Button</Button> */}
                </CardBody>
              </Card>
            </>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default CardData;

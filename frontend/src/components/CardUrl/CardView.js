import React, { useState, useEffect } from "react";
import { Button, Input, Container, Row, Col } from "reactstrap";
import CardData from "./CardData";
import axios from "axios";
// import urlContent from "url-content";

const CardView = () => {
  const [urlValue, setUrlValue] = useState("");
  const [metaData, setMetaData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(urlValue);
  const checkContent = () => {
    console.log("hello");
    setIsLoading(true);
    axios({
      method: "post",
      url: "http://localhost:5000/todos/url",
      data: {
        url: urlValue,
      },
    })
      .then((res) => {
        console.log(res, "this is url");
        setMetaData([...metaData, res.data]);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  };
  console.log(metaData, "MATADATA");
  //   useEffect(() => {
  // axios({
  //   method: "post",
  //   url: "http://localhost:5000/todos/url",
  //   data: {
  //     urel: "http://www.google.com",
  //   },
  // }).then((res) => console.log(res, "this is url"));
  //   }, [urlValue]);

  return (
    <>
      <Container>
        <Input
          type="text"
          onChange={(e) => setUrlValue(e.target.value)}
          value={urlValue}
          size="4"
        />{" "}
        <br />
        <Button color="primary" onClick={checkContent}>
          Save
        </Button>
        <br />
        {isLoading ? "Loading..." : <CardData data={metaData} />}
      </Container>
    </>
  );
};

export default CardView;

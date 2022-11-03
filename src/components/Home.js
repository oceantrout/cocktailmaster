import "./Home.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import React from "react";
function Home() {
  return (
    <div className="nav">
      <Card
        style={{
          width: "300px",
          height: "400px",
          opacity: 0.8,
          margin: "100px",
          marginLeft: "350px",
          color: "grey",
        }}
      >
        <Card.Img
          variant="top"
          src="/ingre4.png"
          style={{ opacity: 0.3, height: "200px" }}
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/SearchbyIngre">
            <Button variant="primary" size="lg">
              Search by Ingredients
            </Button>
          </Link>{" "}
        </Card.Body>
      </Card>

      <Card
        style={{
          width: "300px",
          height: "400px",
          margin: "100px",
          marginLeft: "150px",
          opacity: 0.8,
          color: "grey",
        }}
      >
        <Card.Img
          variant="top"
          src="/cocktail.png"
          style={{ opacity: 0.3, height: "200px" }}
        />
        <Card.Body>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Link to="/SeachbyName">
            <Button variant="primary" size="lg">
              Search by Name
            </Button>
          </Link>{" "}
        </Card.Body>
      </Card>
    </div>
  );
}

export default Home;

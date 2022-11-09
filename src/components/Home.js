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
            You can find what are on top of people's mind for cocktail, what are
            the most common cocktail people consumed
          </Card.Text>
          <Link to="/Popular">
            <Button variant="primary" size="lg">
              Top 20 popular cocktail
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
            You can find your ideal cocktail by searching the name you already
            know, such as Magarita, Singapore Sling, Long Island
          </Card.Text>
          <Link to="/Search">
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

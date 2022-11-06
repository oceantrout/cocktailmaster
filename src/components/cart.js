import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import "./cart.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function Cart(props) {
  let selections = props.cart.map((d, i) => {
    return (
      <ListGroup.Item key={i} onClick={() => props.handleClick(d)}>
        {d.strDrink}
      </ListGroup.Item>
    );
  });

  return (
    <div className="cart">
      <h5>Your selection is here</h5>
      <ListGroup>{selections}</ListGroup>

      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Note to send</Form.Label>
          <Form.Control as="textarea" rows={3}>
            {/* {selections.map((d, i) => (
              <li>{d.strDrink}</li>
            ))} */}
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Cart;

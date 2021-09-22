import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class AddAge2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Joe",
      lastName: "Russell",
      age: 21,
      hairColor: "brown",
    };
  }

  incrementAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { firstName, lastName, age, hairColor } = this.state;
    return (
      <Container>
        <Row>
          <Col className="col-5">
            <h2 className="text-danger mt-3">
              {lastName}, {firstName}
            </h2>
            <h3>Age: {age}</h3>
            <p>Hair color: {hairColor}</p>
            <Button variant="secondary" onClick={this.incrementAge}>
              Birthday button for {firstName} {lastName}
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default AddAge2;

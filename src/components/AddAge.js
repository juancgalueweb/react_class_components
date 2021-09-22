import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

class AddAge extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: 38,
    };
  }

  incrementAge = () => {
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { age } = this.state;
    const { firstName, lastName, hairColor } = this.props;
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

export default AddAge;

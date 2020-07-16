import React,{ Component } from 'react';
import { Row, Col, Form, Button, Container} from 'react-bootstrap';
//import PropTypes from 'prop-types';

class Manager extends Component{

  constructor(props){
    super(props);
    this.state={
      email:'',
      password:''
    };
  }

  render(){
    return (
      <React.Fragment>
        <Container fluid>
            <Row>
                <Col>Column 1</Col>
                <Col>Column 2</Col>
            </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Manager;

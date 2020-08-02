import React,{ Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faList, faUserClock, faCookieBite } from '@fortawesome/free-solid-svg-icons'

import './Manager.css'
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
          <section className="vertical-left-side-bar level-2">
                <ul className="unordered-list-sidebar">
                  <li className="sidebar-list-item">
                    <FontAwesomeIcon icon={faTachometerAlt} />
                    <label className="sidebar-item-text">Dashboard</label>
                  </li>
                  <li className="sidebar-list-item">
                    <FontAwesomeIcon icon={faList} />
                    <label className="sidebar-item-text">Events</label>
                  </li>
                  <li className="sidebar-list-item">
                    <FontAwesomeIcon icon={faCookieBite} />
                    <label className="sidebar-item-text">Food Items</label>
                  </li>
                  <li className="sidebar-list-item">
                    <FontAwesomeIcon icon={faUserClock} />
                    <label className="sidebar-item-text">Waiter</label>
                  </li>
                </ul>
              </section>
            <Row className="level-1">
                <Col lg={2} md={2} >
                  Column 1
                </Col>
                <Col lg={10} md={10} >Column 2</Col>
            </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Manager;

import React,{ Component } from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTachometerAlt, faList, faUserClock, faCookieBite, faUser, faCog, faUserPlus } from '@fortawesome/free-solid-svg-icons'

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
          <Row className="">
            <Col lg={2} md={2} className="left-side-nav">
              <ul className="menu-list">
                <li className="active">
                  <Link className="nav-link" to="/manager/dashboard">
                    <FontAwesomeIcon icon={faTachometerAlt} /><label>Dashboard</label>
                  </Link>
                </li>
                <li className=""><FontAwesomeIcon icon={faList} /><label>Events</label></li>
                <li className=""><FontAwesomeIcon icon={faCookieBite} /><label>Food Items</label></li>
                <li className=""><FontAwesomeIcon icon={faUserClock} /><label>Waiters</label></li>
                <li className=""><FontAwesomeIcon icon={faUserPlus} /><label>Register</label></li>
                <li className=""><FontAwesomeIcon icon={faCog} /><label>Settings</label></li>
              </ul>
            </Col>
            <Col lg={10} md={10}>
              <Col lg={12} md={12} sm={12} xs={12} className="dashboard-metric-card-holder">
                <Col lg={4} md={4} sm={12} xs={12} >
                  <div className="dashboard-metric-card red-card">
                    <label className="metric-title" >Events Conducted</label>
                    <label className="metric-count" >3</label>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} >
                  <div className="dashboard-metric-card blue-card">
                    <label className="metric-title" >Total Raised</label>
                    <label className="metric-count" >25K</label>
                  </div>
                </Col>
                <Col lg={4} md={4} sm={12} xs={12} >
                  <div className="dashboard-metric-card green-card">
                    <label className="metric-title" >Unique Items</label>
                    <label className="metric-count" >40</label>
                  </div>
                </Col>
              </Col>
              <Col lg={12} md={12} sm={12} xs={12} style={{display:"flex"}}>
                <Col lg={6} md={6} sm={12} xs={12}>
                  Graph
                </Col>
                <Col lg={6} md={6} sm={12} xs={12}>
                  Graph
                </Col>
              </Col>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    )
  }
}

export default Manager;

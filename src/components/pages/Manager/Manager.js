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
          <section className="vertical-left-side-bar level-2" style={{display:"none"}}>
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
          <Row className="">
            <Col lg={2} md={2} className="left-side-nav">
              <ul className="menu-list">
                <li className="active"><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
                <li><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
                <li><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
                <li><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
                <li><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
                <li><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
                <li><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
                <li><FontAwesomeIcon icon={faUserClock} /><label>List Item</label></li>
              </ul>
            </Col>
            <Col lg={10} md={10}>
              <Col lg={12} md={12} sm={12} xs={12} className="dashboard-metric-card-holder">
                <div className="dashboard-metric-card">
                  <label className="metric-title" >Events Conducted</label>
                  <label className="metric-count" >3</label>
                </div>
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

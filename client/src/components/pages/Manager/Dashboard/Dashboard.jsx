import React from 'react';
import { Col } from 'react-bootstrap';

function Dashboard(){
    return(
    <React.Fragment>
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
    </React.Fragment>);
}

export default Dashboard;
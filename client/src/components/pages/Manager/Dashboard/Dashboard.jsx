import React from 'react';
import { Col } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTicketAlt, faRupeeSign, faShoppingBag } from '@fortawesome/free-solid-svg-icons';

function Dashboard(){
    return(
    <React.Fragment>
        <Col lg={12} md={12} sm={12} xs={12} className="dashboard-metric-card-holder">
            <Col lg={4} md={4} sm={12} xs={12} >
                <div className="dashboard-metric-card yellow-card">
                    <div class="icon-count">
                        <FontAwesomeIcon className="count" icon={faTicketAlt} />
                        <label className="metric-count" >3</label>
                    </div>
                        <label className="metric-title" >Total Events Conducted</label>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} >
                <div className="dashboard-metric-card red-card">
                    <div class="icon-count">
                        <FontAwesomeIcon className="count" icon={faRupeeSign} />
                        <label className="metric-count" >25K</label>
                    </div>
                        <label className="metric-title" >Total Raised Till Today</label>
                </div>
            </Col>
            <Col lg={4} md={4} sm={12} xs={12} >
                <div className="dashboard-metric-card orange-card">
                    <div class="icon-count">
                        <FontAwesomeIcon className="count" icon={faShoppingBag} />
                        <label className="metric-count" >40</label>
                    </div>
                    <label className="metric-title" >Unique Items Sold</label>
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
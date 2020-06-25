import React,{Component} from 'react';
import { Col, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

class MenuItem extends Component{

    render(){
        const {id,title,serving,rate,purchaseQuantity} = this.props.item;
        return (
            <Col lg={6} md={6} sm={12} sx={12} style={{alignSelf: "center",margin:"2% 0%"}}>
                <Col style={style.detailHolder}>
                    <Col lg={10} md={10} sm={10} sx={10}style={{alignSelf: "center",paddingRight:"0%"}}>
                        <Col lg={12} md={12} sm={12} sx={12}style={{alignSelf: "center",padding:"0%"}}>
                            <label style={{fontWeight:"600",fontSize:"15px"}}>{title}</label>
                        </Col>
                        <Col lg={12} md={12} sm={12} sx={12}style={{alignSelf: "center",padding:"0%"}}>
                            <label>{serving} </label> @ <label> INR{rate}</label>
                        </Col>
                    </Col>
                    <Col lg={2} md={2} sm={2} sx={2} style={{alignSelf: "center",paddingLeft:"0%"}}>
                        <Col lg={12} md={12} sm={12} sx={12} style={{alignSelf: "center",padding: "0%",textAlign: "center"}}>
                            <label style={{fontWeight:"700",fontSize:"19px"}}>{purchaseQuantity}</label>
                        </Col >
                        <Col lg={12} md={12} sm={12} sx={12} style={{display:"flex",alignSelf: "center",paddingLeft: "0%"}}>
                            <Button style={{width:"450%"}} onClick={()=>this.props.menuItemDecremented(this,id)} variant="danger"><FontAwesomeIcon style={style.detailHolder.addSubtractButton.faStyle} icon={faMinus} /></Button>
                            <Button style={{width:"450%",position:"relative",right: "-14px"}} onClick={()=>this.props.menuItemIncremented(this,id)} variant="success"><FontAwesomeIcon style={style.detailHolder.addSubtractButton.faStyle} icon={faPlus} /></Button>
                        </Col>
                    </Col>
                </Col>
            </Col>
            /* <Col lg={6} md={6} sm={12} sx={12} style={{alignSelf: "center",margin:"2% 0%"}}>
                <div style={style.detailHolder}>
                    <Col lg={12} md={12} sm={12} sx={12}style={{alignSelf: "center"}}>
                        <label>{title}</label>
                    </Col>
                    <Col lg={12} md={12} sm={12} sx={12} style={{display:"flex",alignSelf: "center"}}>
                        <Col lg={7} md={7} sm={7} sx={7} style={{display:"flex",alignSelf: "center"}}>
                            <label>{serving} </label> @ <label> INR{rate}</label>
                        </Col >
                        <Col lg={5} md={5} sm={5} sx={5} style={{display:"flex",alignSelf: "center"}}>
                            <Col>
                                <Button style={style.detailHolder.addSubtractButton} onClick={()=>this.props.menuItemDecremented(this,id)} variant="danger"><FontAwesomeIcon style={style.detailHolder.addSubtractButton.faStyle} icon={faMinus} /></Button>
                            </Col>
                            <Col style={{alignSelf: "center",fontWeight:"600",fontSize:"19px",padding: "0%",width: "45px",textAlign: "center"}}>
                                <label>{purchaseQuantity}</label>
                            </Col>
                            <Col>
                                <Button style={style.detailHolder.addSubtractButton} onClick={()=>this.props.menuItemIncremented(this,id)} variant="success"><FontAwesomeIcon style={style.detailHolder.addSubtractButton.faStyle} icon={faPlus} /></Button>
                            </Col>
                        </Col>
                    </Col>
                </div>
            </Col> */
        );
    };
}

const style={
    detailHolder:{
        borderRadius: "8px",
        padding: "10px 0px",
        background: "#fff",
        boxShadow: "#acacac 1px 1px 8px",
        display:"flex",
        addSubtractButton:{
            faStyle:{
                fontSize: "10px"
            }
        }
    }
};

export default MenuItem
import React,{ Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import MenuItem from '../lists/menuItem/MenuItem'

class ItemsListing extends Component{

    state={
        totalCost:0.0,
        itemList:[]
    };

    componentDidMount(){
        const data=[
            {
                id:1,
                title:"Chocolate Doughnuts",
                serving:"2/plate",
                rate:20,
                purchaseQuantity:0
            },{
                id:2,
                title:"Cupcakes",
                serving:"1/plate",
                rate:10,
                purchaseQuantity:0
            },{
                id:3,
                title:"Casserolls",
                serving:"2/plate",
                rate:30,
                purchaseQuantity:0
            },{
                id:4,
                title:"Quesadilla",
                serving:"2/plate",
                rate:50,
                purchaseQuantity:0
            },{
                id:5,
                title:"Veg. Taco",
                serving:"2/plate",
                rate:40,
                purchaseQuantity:0
            },{
                id:6,
                title:"Croquettes",
                serving:"3/plate",
                rate:30,
                purchaseQuantity:0
            },
        ];
        this.setState({itemList:data});
    }

    menuItemIncremented = (element,id) =>{
        this.setState({itemList: this.state.itemList.map((item)=>{
                if (item.id === id) {
                    item.purchaseQuantity +=1;

                    this.setState({totalCost:(this.state.totalCost+element.props.item.rate)});
                }
                return item;
            })
        });
    }

    menuItemDecremented = (element,id) =>{
        this.setState({itemList: this.state.itemList.map((item)=>{
                if (item.id === id && item.purchaseQuantity !==0) {
                    item.purchaseQuantity -=1;
                    this.setState({totalCost:(this.state.totalCost-element.props.item.rate)});
                }
                return item;
            })
        });
    }

    render(){
        return(
            <Container>
                <Row lg={1} md={1} sm={1} xs={1} style={{paddingBottom:"130px"}}>
                    {
                        this.state.itemList.map((item)=>{
                            return <MenuItem key={item.id} item={item} menuItemIncremented={this.menuItemIncremented} menuItemDecremented={this.menuItemDecremented}/>
                        })
                    }
                    {/* <Col lg={12} md={12} sm={12} sx={12} style={{position:"fixed",bottom:"0",width:"inherit",backgroundColor: "white",boxShadow: "1px 0px 7px #7d7d7d",}}>
                        <Col lg={12} md={12} sm={12} sx={12} style={{display:"flex"}}>
                            <Col lg={6} md={6} sm={6} xs={6} style={style.menuFooter.totalTextDiv}>
                                <label>Total:</label>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6} style={style.menuFooter.numericAmountDiv}>
                                <label>{this.state.totalCost}</label>
                            </Col>
                        </Col>
                        <Col lg={12} md={12} sm={12} sx={12} style={{display:"flex"}}>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <Button variant="danger" style={style.menuFooter.buttons}>Reset</Button>
                            </Col>
                            <Col lg={6} md={6} sm={6} xs={6}>
                                <Button variant="success" style={style.menuFooter.buttons}>Done</Button>
                            </Col>
                        </Col>
                    </Col> */}
                </Row>
                <Row lg={1} md={1} sm={1} xs={1} style={style.menuFooter}>
                    <Col lg={12} md={12} sm={12} xs={12} style={style.menuFooter.totalAndAmountStructure}>
                        <Col lg={6} md={6} sm={6} xs={6} style={style.menuFooter.totalTextDiv}>
                            <label>Total:</label>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} style={style.menuFooter.numericAmountDiv}>
                            <label>{this.state.totalCost}</label>
                        </Col>
                    </Col>
                    <Col lg={12} md={12} sm={12} xs={12} style={style.menuFooter.resetDoneStructure}>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <Button variant="danger" style={style.menuFooter.buttons}>Reset</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <Button variant="success" style={style.menuFooter.buttons}>Done</Button>
                        </Col>
                    </Col>
                </Row>
            </Container>
        )
    }
}

const style={
    menuFooter:{
        position: "fixed",
        bottom: "0",
        width: "100%",
        backgroundColor: "white",
        boxShadow: "1px 0px 7px #7d7d7d",
        padding: "2% 0%",
        totalAndAmountStructure:{
            display:"flex"
        },
        totalTextDiv:{
            textAlign:"right",
            fontSize:"43px"
        },
        numericAmountDiv:{
            textAlign:"right",
            fontSize:"43px"
        },
        resetDoneStructure:{
            display:"flex"
        },
        buttons:{
            width:"100%"
        }
    }
}

export default ItemsListing
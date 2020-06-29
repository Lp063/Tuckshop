import React,{ Component } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';

import MenuItem from '../lists/menuItem/MenuItem';
import LoadingAnimation from '../spaceHolders/LoadingAnimation';

class ItemsListing extends Component{

    constructor(props) {
        super(props);
        this.state = {
            totalCost:0.0,
            itemList:[]
        };
    }
    /* state={
        totalCost:0.0,
        itemList:[]
    }; */

    async componentDidMount(){
        const foodItemsApi = await this.props.event_items();
        this.setState({itemList:foodItemsApi});
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

    resetButtonClicked = ()=>{
        /* this.setState({itemList: this.state.itemList.map((item)=>{
                item.purchaseQuantity = 0;
                return item;
            })
        });
        this.setState({totalCost:0}); */
    }

    checkoutButtonClicked = () => {
        const data={
            totalCost:this.state.totalCost,
            listOfItems:this.state.itemList.filter((item)=>{
                return item.purchaseQuantity !==0;
            })
        };
        this.props.itemsCheckedOut(data);
    }

    enableDisableResetDone = (totalCost) => {
        var returnBool = true;
        if (totalCost) {
            returnBool = false;
        }
        return returnBool;
    }

    render(){
        var itemRows;
        if (this.state.itemList) {
            const { itemList } = this.state;
            itemRows = itemList.map((item)=>{
                return <MenuItem key={item.id} item={item} menuItemIncremented={this.menuItemIncremented} menuItemDecremented={this.menuItemDecremented}/>
            });
        }
        //console.log(LoadingAnimation)
        return(
            <Container>
                <Row lg={1} md={1} sm={1} xs={1} style={{paddingBottom:"130px"}}>
                    { 
                        this.state.itemList.length?itemRows:<LoadingAnimation />
                    }
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
                            <Button variant="danger" size="lg"  block onClick={this.resetButtonClicked.bind(this)} disabled={this.enableDisableResetDone(this.state.totalCost)}>Reset</Button>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6}>
                            <Button variant="success" size="lg"  block onClick={this.checkoutButtonClicked.bind(this)} disabled={this.enableDisableResetDone(this.state.totalCost)}>Done</Button>
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
        }
    }
}

export default ItemsListing
import React,{ Component } from 'react';
import { Row, Col, Alert, Button  } from 'react-bootstrap';

import "./TeamRegistration.css";

class TeamRegistration extends Component{

    constructor(props){
        super(props);
        this.state={
            RegistrationStep:1,
            displayForm:"block",
            displayFormAlert:{
                show:"none",
                variant:"success",
                alertHeader:"Hey, You are all set.",
                alertContents:"Please check your email for the verification mail as it is valid for 3 days."
            },
            formFieldsErrors:{
                firstName:{
                    invalid:true,
                    showmessage:false,
                    message:"Invalid"
                },
                lastName:{
                    invalid:true,
                    showmessage:false,
                    message:"Invalid"
                },
                contact:{
                    invalid:true,
                    showmessage:false,
                    message:"Invalid Number"
                },
                /* registrationType:true,
                profileImage:true, */
                email:{
                    invalid:true,
                    showmessage:false,
                    message:"Invalid Id"
                },
                password:{
                    invalid:true,
                    showmessage:false,
                    message:"Must be 8 charecters long"
                },
                /* teamName:"",
                teamPlayers:[] */
            },
            formFields:{
                firstName:"",
                lastName:"",
                contact:"",
                /* registrationType:"DEFAULT",
                profileImage:"", */
                email:"",
                password:"",
                /* teamName:"",
                teamPlayers:[] */
            }
        };
    }

    handleChange =(event)=>{
        var regex=null;
        var validInput=false;
        var inputValue=event.target.value;

        switch (event.target.name) {
            case "firstName":
            case "lastName":
                regex = /^[a-zA-Z]+$/;
                if (regex.test(inputValue) || inputValue ==="") {
                    validInput = true
                }else{
                    validInput = false
                    return;
                }
                break;

            case "contact":
                regex = /^[0][1-9]\d{9}$|^[1-9]\d{9}$/;
                if (regex.test(inputValue)) {
                    validInput = true;
                }
                break;
                
            case "email":
                // eslint-disable-next-line
                regex =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (regex.test(inputValue)) {
                    validInput = true;
                }
                break;
                
            case "password":
                regex = /^(?=.*\d).{8,}$/;
                if (regex.test(inputValue)) {
                    validInput = true;
                }
                break;
        
            default:
                break;
        }
        
        let newState = Object.assign({}, this.state);
        newState.formFields[event.target.name] = inputValue;
        newState.formFieldsErrors[event.target.name].invalid = !validInput;
        newState.formFieldsErrors[event.target.name].showmessage = !validInput;
        this.setState(newState);
    }
    
    submitTeamRegistration = (event) =>{
        event.preventDefault();
        
        var canSubmit = true;
        var checkObject = Object.keys(this.state.formFieldsErrors);
        checkObject.map((field, index)=>{
            if (this.state.formFieldsErrors[field].invalid) {
                canSubmit = false;
            }
            return 0;
        });

        if (canSubmit) {
            this.props.submitRergistration(this.state.formFields);
        } else {
            
        }
    }
    
    render(){
        return(
            <form onSubmit={this.handleSubmit} >
                <Col lg={12} md={12} sm={12} xs={12} style={{display:this.state.displayForm}}>
                    <Row lg={2} md={2} sm={2} xs={2}>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <label htmlFor="inputEmail4">First Name</label>
                            <input type="text" name="firstName"  value={this.state.formFields.firstName} onChange={this.handleChange.bind(this)} className="form-control name-input" placeholder="" required/>
                        </Col>
                        <Col lg={6} md={6} sm={6} xs={6} >
                            <label htmlFor="inputEmail4">Last Name</label>
                            <input type="text" name="lastName" value={this.state.formFields.lastName} onChange={this.handleChange.bind(this)} className="form-control name-input" placeholder="" required/>
                        </Col>
                    </Row>
                    <Row lg={2} md={2} sm={1} xs={1}>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputEmail4">Contact</label>
                            <input type="number" name="contact" value={this.state.formFields.contact} onChange={this.handleChange.bind(this)} className="form-control" id="inputEmail4" placeholder="" />
                            <label className={"invalid-input"} style={{display: this.state.formFieldsErrors.contact.showmessage ? "block":"none"}}>{this.state.formFieldsErrors.contact.message}</label>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="text" name="email" value={this.state.formFields.email} onChange={this.handleChange.bind(this)} className="form-control" id="inputEmail4" placeholder="" />
                            <label className={"invalid-input"} style={{display: this.state.formFieldsErrors.email.showmessage ? "block":"none"}}>{this.state.formFieldsErrors.email.message}</label>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" name="password" value={this.state.formFields.password} onChange={this.handleChange.bind(this)} className="form-control" id="inputPassword4" placeholder="" />
                            <label className={"invalid-input"} style={{display: this.state.formFieldsErrors.password.showmessage ? "block":"none"}}>{this.state.formFieldsErrors.password.message}</label>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group" style={{display:"none"}}>
                            <label htmlFor="inputPassword4">Registration Type</label>
                            <select defaultValue={this.state.formFields.registrationType}  onChange={this.handleChange.bind(this)} className="browser-default custom-select" name="registrationType" as="select" required>
                                <option value="DEFAULT" disabled >Manager Or Player</option>
                                <option value="0">Manager</option>
                                <option value="1">Player</option>
                            </select>
                        </Col>
                        <Col lg={6} md={6} sm={12} xs={12} className="form-group" style={{display:"none"}}>
                            <div>
                                <input type="file" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                                <label className="custom-file-label player-image" htmlFor="inputGroupFile01">Account Image</label>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        
                    </Row>
                </Col>
                <Col  lg={12} md={12} sm={12} xs={12} style={{display:this.state.displayForm}}>
                    <button type="submit" onClick={this.submitTeamRegistration} className="btn btn-success green-submit-button">Sign up</button>
                </Col>
                <Alert variant={this.state.displayFormAlert.variant} style={{display:this.state.displayFormAlert.show}}>
                    <Alert.Heading>{this.state.displayFormAlert.alertHeader}</Alert.Heading>
                    {this.state.displayFormAlert.alertContents}
                    <hr />
                    <div className="d-flex justify-content-end">
                        <Button variant="outline-success">
                            Log In
                        </Button>
                    </div>
                </Alert>
            </form>
            
        )
    }
}

export default TeamRegistration
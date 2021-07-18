import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Logo from './common/Logo';
import {Link} from 'react-router-dom';
import './ForgotPasword.css'

class ForgotPassword extends Component {
    render() {
        return (
            <Row md={4}>
                <Col xs={2}>
                    <Logo />
                </Col>
                <Col xs={6}>
                    <span className="inputText__fogot">Forgot Password?</span>
                    <div class="mb-3 fogot__form">
                        <form class="row g-3 ">
                            <div class="col-md-12">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Your Email"  />
                            </div>
                            <hr class="hr-text"/>
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Your Mobile Number"  />
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-danger fogot__btn">varify</button> 
                                <span className="signup__link">Not on Extreach? <Link style={{textDecoration:'none'}} to="/signUp">Sign Up</Link> </span>   
                            </div>
                        </form>
                    </div>
                    
                </Col>
                <Col xs={4} className="rightSideCol__fogot">
                    
                </Col>
            </Row>
        )
    }
}

export default ForgotPassword;

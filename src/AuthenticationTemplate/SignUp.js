import React, { Component } from 'react'
import { Col, Row } from 'react-bootstrap';
import Logo from './common/Logo';
import {Link} from 'react-router-dom';
import './SignUp.css';
class SignUp extends Component {
    render() {
        return (
            <Row md={4}>
                <Col xs={2}>
                    <Logo/>
                </Col>
                <Col xs={6}>
                <span className="inputText__signup">Let's get your Account Set Up</span>
                    <div class="mb-3 signup__form">
                        <form class="row g-3">
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Username"  />
                            </div>
                            <div class="col-md-12">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Your Email"  />
                            </div>
                            <div class="col-md-12">
                                <input type="text" class="form-control" id="inputEmail4" placeholder="Enter Your Mobile Number"  />
                            </div>
                            <div class="col-md-12">
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Set Password" />
                                <img className="showHide__signupset" src="assets/svg/show.svg" alt="show" /> 
                            </div>
                            <div class="col-md-12">
                                <input type="password" class="form-control conf__password" id="inputPassword4" placeholder="Confirm Password" />
                                <img className="showHide__signupconf" src="assets/svg/show.svg" alt="show" /> 
                            </div>
                            
                            <div class="col-12">
                                <div class="form-check checkbox__signup">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label checkOut" for="gridCheck">
                                        I agree to Extramarks &nbsp; <a style={{textDecoration:'none'}} href="/">Terms of Use</a> &nbsp; and &nbsp;<a style={{textDecoration:'none'}} href="/">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-danger singup__btn">Sign up</button>
                                <hr class="hr-text"/>
                                <div className="social__Icon">
                                    <img className="google__Img" src="assets/svg/Google.svg" alt="google" />
                                    <span className="social__text">Sign In with Google</span> 
                                </div>
                                <span className="signup__link">Already on Extreach?<Link style={{textDecoration:'none'}} to="/">Sign In</Link> </span>
                                
                            </div>
                        </form>

                    </div>
                </Col>
                <Col xs={4} className="rightSideCol__signup">

                </Col>
            </Row>
        )
    }
}

export default SignUp

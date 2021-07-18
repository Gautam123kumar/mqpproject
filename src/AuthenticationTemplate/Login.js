
import React, { Component } from 'react'
import { Col,Row } from 'react-bootstrap';
import './Login.css';
import {Link} from 'react-router-dom';
import Logo from './common/Logo';
import Slider from './common/Slider/Slider';
class Login extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Row md={4}>
                <Col xs={2}>
                    <Logo/>
                </Col>
                <Col xs={6}>
                <span className="inputText">Log In</span>
                    <div class="mb-3 login__form">
                       
                        <form class="row g-3">
                            <div class="col-md-12">
                                <input type="email" class="form-control" id="inputEmail4" placeholder="Enter Your Email"  />
                            </div>
                            <div class="col-md-12">
                                <input type="password" class="form-control" id="inputPassword4" placeholder="Enter Your Password" />
                                <Link style={{textDecoration:'none'}} className="fPassword" to="/forgotPassword">forgotPassword</Link>
                                <img className="showHide" src="assets/svg/show.svg" alt="show" />
                                
                            </div>
                            
                            <div class="col-12">
                                <div class="form-check check__box">
                                    <input class="form-check-input" type="checkbox" id="gridCheck" />
                                    <label class="form-check-label checkOut" for="gridCheck">
                                        I agree to Extramarks &nbsp; <a style={{textDecoration:'none'}} href="/">Terms of Use</a> &nbsp; and &nbsp;<a style={{textDecoration:'none'}} href="/">Privacy Policy</a>
                                    </label>
                                </div>
                            </div>
                            <div class="col-md-12">
                                <button type="submit" class="btn btn-danger login__btn">Sign in</button>
                                <hr class="hr-text"/>
                                <div className="social__Icon">
                                    <img className="google__Img" src="assets/svg/Google.svg" alt="google" />
                                    <span className="social__text">Sign In with Google</span> 
                                </div>
                                <span className="signup__link">Not on Extreach? <Link style={{textDecoration:'none'}} to="/signUp">Sign Up</Link> </span>
                                
                            </div>
                        </form>

                    </div>
                </Col>
                <Col xs={4} className="rightSideCol__login">
                    {/* <Slider/> */}
                </Col>
            </Row>
        )
    }
}

export default Login;

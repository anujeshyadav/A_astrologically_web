import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import axiosConfig from "./../../axiosConfig";
import LayoutOne from "../../layouts/LayoutOne";
import { Label, Input, Form, Button } from "reactstrap";
import swal from "sweetalert";
// import OtpInput from "react-otp-input";
import { CgSpinner } from "react-icons/cg";
import { auth } from "../../components/firbase_config";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Register: "Register",
      RegistrationView: true,
      loginText: "Login",
      fullname: "",
      email: "",
      mobile: "",
      dob: "",
      gender: "",
      city: "",
      userimg: "",
      selectedName: "",
      password: "",
      cnfrmpassword: "",
      selectedFile: null,
      otp: "",
      otpMsg: "",
    };
  }
  //Image Submit Handler
  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    // console.log(event.target.files[0]);
  };

  otpHandler = () => {
    console.log(this.state.mobile);
    axiosConfig
      .post(`/user/userVryfyotp`, {
        mobile: parseInt(this.state.mobile),
        otp: "123456",
      })
      .then((response) => {
        console.log("@@@####", response.data);
        // let id = response.data.user;
        if (response.data.status === true) {
          this.setState({ otpMsg: response.data.msg });
          localStorage.setItem(
            "userData",
            JSON.stringify(response?.data?.data)
          );
          localStorage.setItem("token", JSON.stringify(response?.data?.token));
          localStorage.setItem(
            "user_id",
            JSON.stringify(response?.data?.data?._id)
          );
          localStorage.setItem(
            "user_mobile_no",
            JSON.stringify(response?.data?.data?.mobile)
          );
          if (response.data.msg === "otp verified") {
            swal("otp verified Successfully");
            // window.location.replace('/')
            this.props.history.push("/");
          }
        }
      })
      .catch((error) => {
        console.log(error);
        //this.setState({ errormsg: error });
      });
  };
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  ConfigureCaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          console.log(response);
          console.log("verified captcha");
        },
        defaultCountry: "IN",
      },
      auth
    );
  };
  onSignInSubmit = () => {
    this.ConfigureCaptcha();
    this.setState({ loginText: "Wait" });
    const appVerifier = window.recaptchaVerifier;
    let number = "+91" + this.state.mobile;
    // console.log(number);
    signInWithPhoneNumber(auth, number, appVerifier)
      .then((confirmationResult) => {
        // console.log("otp has been sent", confirmationResult);
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error.response.data);
        // Error; SMS not sent
        this.setState({ loginText: "Login" });
        // swal("SMS Not send", "Server Error");
        // ...
      });
  };

  onOtpverify = (e) => {
    e.preventDefault();
    let code = this.state.otp;
    window.confirmationResult
      .confirm(code)
      .then(async (res) => {
        console.log("User_Verified", res);
        this.otpHandler();
      })
      .catch(async (err) => {
        console.log(err);
        const otptext = document.getElementById("otptext");
        otptext.innerText = "OTP Does Not Match, Try again";
        // swal("Otp Does Not Veryfied");
      });
  };

  onResOtpverify = (e) => {
    e.preventDefault();
    let code = this.state.otp;
    window.confirmationResult
      .confirm(code)
      .then(async (res) => {
        console.log("User_Verified", res);
        this.finalstepRes();
      })
      .catch(async (err) => {
        console.log(err);
        const otptext = document.getElementById("otptext");
        otptext.innerText = "OTP Does Not Match, Try again";
        // swal("Otp Does Not Veryfied");
      });
  };

  loginHandler = (e) => {
    e.preventDefault();
    let obj = {
      mobile: parseInt(this.state.mobile),
    };
    axiosConfig
      .post(`/user/userlogin`, obj)
      .then((response) => {
        console.log("userLogin", response.data);
        if (response.data.status === true) {
          this.setState({ otpMsg: response.data.msg });
          this.onSignInSubmit();

          // swal("otp Send Successfully");
          // this.setState({ loginText: "Wait" });
          // const otptext = document.getElementById("otptext");
          // otptext.innerText = "Enter OTP below";
          // this.props.history.push('/')
        }
      })
      .catch((error) => {
        console.log(error.response);
        if (error.response?.data.msg === "User doesn't Exist") {
          swal("Error!", "User doesn't Exist", "error");
          this.setState({ loginText: "Login" });
        }
        // const otptext = document.getElementById("signintext");
        // otptext.innerText = "User Not Registered With This Number";
      });
  };

  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  RegistrationOtpVerify = () => {
    this.ConfigureCaptcha();
    this.setState({ RegistrationView: false });
    window.scrollTo(0, 0);
    const appVerifier = window.recaptchaVerifier;
    let number = "+91" + this.state.mobile;
    // console.log(number);
    signInWithPhoneNumber(auth, number, appVerifier)
      .then((confirmationResult) => {
        swal("otp has been sent");
        window.confirmationResult = confirmationResult;
      })
      .catch((error) => {
        console.log(error.response.data);
        // Error; SMS not sent
        this.setState({ Register: "Register" });

        swal("OTP Not Send", "Some Error Occured Try again");

        // swal("SMS Not send", "Server Error");
        // ...
      });
  };

  finalstepRes = () => {
    const data = new FormData();
    data.append("fullname", this.state.fullname);
    data.append("email", this.state.email);
    data.append("mobile", this.state.mobile);
    data.append("gender", this.state.gender);
    data.append("city", this.state.city);
    data.append("dob", this.state.dob);
    data.append("password", this.state.password);
    data.append("cnfmPassword", this.state.cnfrmpassword);
    if (this.state.selectedFile !== null) {
      data.append("userimg", this.state.selectedFile, this.state.selectedName);
    }
    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }

    // this.setState({ otp: false });
    if (this.state.password === this.state.cnfrmpassword) {
      axiosConfig
        .post(`/user/usersignup`, data)
        .then((response) => {
          console.log(response.data.msg);
          localStorage.setItem("auth-token", response.data.token);
          this.setState({
            // token: response.data.token,
            otpMsg: response.data.otp,
          });
          swal("Success!", " Register Successful Done!", "success");
          this.props.history.push("/");
        })
        .catch((error) => {
          console.log(error.response.data.message === "already exists");
          if (error.response.data.message === "already exists") {
            swal("user Already register with same mobile and email");
          }
          // swal("Error!", "Something went wrong", "error");
        });
    } else swal("Password and Confirm password does not match");
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ Register: "wait" });
    this.RegistrationOtpVerify();
  };
  render() {
    // console.log(this.state.otp);
    return (
      <Fragment>
        {/* <MetaTags>
          <title>AstroVipra</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags> */}
        <LayoutOne headerTop="visible">
          <div id="recaptcha-container"></div>
          <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <Tab.Container defaultActiveKey="login">
                      <Nav variant="pills" className="login-register-tab-list">
                        <Nav.Item>
                          <Nav.Link eventKey="login">
                            <h4>Login</h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="register">
                            <h4>Register</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            {this.state.otpMsg === "otp Send Successfully" ? (
                              <div className="login-register-form">
                                <div style={{ color: "red" }} id="otptext">
                                  Enter Otp Here
                                </div>

                                <Form onSubmit={(e) => this.onResOtpverify(e)}>
                                  <Input
                                    type="number"
                                    name="otp"
                                    required
                                    placeholder="Enter otp"
                                    value={this.state.otp}
                                    onChange={this.changeHandler}
                                  />
                                  <div className="button-box">
                                    <div className="login-toggle-btn"></div>
                                    <button type="submit">
                                      {/* <CgSpinner
                                        className="mr-2 animate-spin"
                                        size={15}
                                      /> */}
                                      <span>Verify OTP </span>
                                    </button>
                                  </div>
                                </Form>
                              </div>
                            ) : (
                              <div className="login-register-form">
                                <div
                                  style={{ color: "red" }}
                                  id="signintext"
                                ></div>
                                <Form onSubmit={this.loginHandler}>
                                  <div id="sign-in-button"></div>
                                  <Input
                                    type="number"
                                    name="mobile"
                                    maxLength="12"
                                    required
                                    placeholder="Enter Your Mobile No."
                                    value={this.state.mobile}
                                    onChange={this.changeHandler}
                                  />
                                  <div className="button-box">
                                    <div className="login-toggle-btn"></div>
                                    <button type="submit">
                                      <span>{this.state.loginText}</span>
                                    </button>
                                  </div>
                                </Form>
                              </div>
                            )}
                          </div>
                        </Tab.Pane>
                        {/* Register the user now */}
                        <Tab.Pane eventKey="register">
                          {this.state.RegistrationView ? (
                            <>
                              <div className="login-form-container">
                                <div className="login-register-form">
                                  <Form
                                    className="text-center"
                                    onSubmit={this.submitHandler}
                                    method="post"
                                  >
                                    <Input
                                      type="text"
                                      name="fullname"
                                      required
                                      placeholder="Enter Your Fullname"
                                      value={this.state.fullname}
                                      onChange={this.changeHandler}
                                    />
                                    <Input
                                      type="email"
                                      name="email"
                                      required
                                      placeholder="Enter Your Email"
                                      value={this.state.email}
                                      onChange={this.changeHandler}
                                    />
                                    <Input
                                      type="number"
                                      name="mobile"
                                      maxLength="12"
                                      required
                                      placeholder="Enter Your Mobile No."
                                      value={this.state.mobile}
                                      onChange={this.changeHandler}
                                    />
                                    <Input
                                      type="date"
                                      name="dob"
                                      required
                                      placeholder="Date of birth"
                                      value={this.state.dob}
                                      onChange={this.changeHandler}
                                    />
                                    <Input
                                      type="text"
                                      name="city"
                                      required
                                      placeholder="Enter city"
                                      value={this.state.city}
                                      onChange={this.changeHandler}
                                    />
                                    <Input
                                      type="password"
                                      name="password"
                                      required
                                      placeholder="Enter Password"
                                      value={this.state.password}
                                      onChange={this.changeHandler}
                                    />
                                    <Input
                                      type="password"
                                      name="cnfrmpassword"
                                      required
                                      placeholder="Enter Confirm Password"
                                      value={this.state.cnfrmpassword}
                                      onChange={this.changeHandler}
                                    />
                                    <Input
                                      required
                                      type="select"
                                      name="gender"
                                      placeholder=""
                                      value={this.state.gender}
                                      onChange={this.changeHandler}
                                    >
                                      <option>Select Gender</option>
                                      <option>Male</option>
                                      <option>Female</option>
                                    </Input>
                                    <Label>User Image</Label>
                                    <Input
                                      type="file"
                                      name="userimg"
                                      onChange={this.onChangeHandler}
                                    />
                                    <div className="button-box">
                                      <Button type="submit">
                                        <span>{this.state.Register}</span>
                                      </Button>
                                    </div>
                                  </Form>
                                </div>
                              </div>
                            </>
                          ) : (
                            <>
                              <div className="login-register-form">
                                <div style={{ color: "red" }} id="otptext">
                                  Enter Otp Here
                                </div>

                                <Form onSubmit={(e) => this.onOtpverify(e)}>
                                  <Input
                                    type="number"
                                    name="otp"
                                    required
                                    placeholder="Enter otp"
                                    value={this.state.otp}
                                    onChange={this.changeHandler}
                                  />
                                  <div className="button-box">
                                    <div className="login-toggle-btn"></div>
                                    <Button
                                      color="primary"
                                      className="mt-3"
                                      type="submit"
                                    >
                                      {/* <CgSpinner
                                        className="mr-2 animate-spin"
                                        size={15}
                                      /> */}
                                      <span>Verify OTP </span>
                                    </Button>
                                  </div>
                                </Form>
                              </div>
                            </>
                          )}
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                  <>
                    <div className="login-form-container">
                      <div className="login-register-form">
                        <div className="button-box">
                          <div className="login-toggle-btn"></div>
                        </div>
                      </div>
                    </div>
                  </>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

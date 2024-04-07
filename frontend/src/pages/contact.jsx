import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "../pages/content_option";
import raj from "../assets/images/profile.jpg";
import nankur from "../assets/images/nankur.jpg";
import harsh from "../assets/images/harsh.jpg";
import abhishek from "../assets/images/abhishek.jpg";
import "../styles/contact.css";

export default function ContactUs() {
    return (
        <Container>
            <Row className="mb-5 mt-3">
                <Col lg="8">
                    <h1 className="display-4 mb-4">Contact Us</h1>
                    <hr className="t_border my-4 ml-0 text-left" />
                </Col>
            </Row>
            <Row className="sec_sp">
                <Col lg="5" className="mb-5">
                    <h3 className="color_sec py-4">
                        Feel free to contact us if any query or just saying Hii!
                    </h3>
                    <address>
                        <strong>Email:</strong>{" "}
                        <a href={`mailto:${contactConfig.YOUR_EMAIL}`}>
                            {contactConfig.YOUR_EMAIL}
                        </a>
                        <br />
                        <br />
                        {contactConfig.hasOwnProperty("YOUR_FONE") ? (
                            <p>
                                <strong>Phone:</strong>{" "}
                                {contactConfig.YOUR_FONE}
                            </p>
                        ) : (
                            ""
                        )}
                    </address>
                    <p>{contactConfig.description}</p>
                </Col>
                <Col lg="7" className="d-flex align-items-center">
                    <form className="contact__form w-100">
                        <Row>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control"
                                    id="name"
                                    name="name"
                                    placeholder="Name"
                                    type="text"
                                    required
                                />
                            </Col>
                            <Col lg="6" className="form-group">
                                <input
                                    className="form-control rounded-0"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    type="email"
                                    required
                                />
                            </Col>
                        </Row>
                        <textarea
                            className="form-control rounded-0"
                            id="message"
                            name="message"
                            placeholder="Message"
                            rows="5"
                            required
                        ></textarea>
                        <br />
                        <Row>
                            <Col lg="12" className="form-group">
                                <button
                                    style={{
                                        backgroundColor: "#4CAF50",
                                        border: "none",
                                        borderRadius: "0.6rem",
                                        color: "white",
                                        padding: "15px 32px",
                                        textAlign: "center",
                                        textDecoration: "none",
                                        display: "inline-block",
                                        fontSize: 16,
                                        margin: "4px 2px",
                                        cursor: "pointer",
                                        transition:
                                            "background-color 0.3s",
                                    }}
                                    className="btn ac_btn"
                                    type="submit"
                                    onMouseOver={(e) =>
                                        (e.target.style.backgroundColor =
                                            "#45a049")
                                    } 
                                    onMouseOut={(e) =>
                                        (e.target.style.backgroundColor =
                                            "#4CAF50")
                                    } 
                                >
                                    Send
                                </button>
                            </Col>
                        </Row>
                    </form>
                </Col>
            </Row>
            <div className="container photo-cont1">
            <h3 style={{textAlign:"center", marginBottom:"1.5rem", textDecoration: 'underline'}}>Our Developers</h3>
                <div className="row photo-cont2">
                    <div className="col-md-3 photo">
                        <img src={harsh} className="img-fluid" alt="mage 1" />
                        <strong>Abhishek Maurya</strong>{" "}
                        <p>Backend Developer</p>
                    </div>
                    <div className="col-md-3 photo">
                        <img src={nankur} className="img-fluid" alt="mage 2" />
                        <strong>Ankur N. Singh</strong>{" "}
                        <p>Frontend Developer</p>
                    </div>
                    <div className="col-md-3 photo">
                        <img src={raj} className="img-fluid" alt="mage 3" />
                        <strong>Krishna Kant Verma</strong>{" "}
                        <p>Frontend Developer</p>
                    </div>
                    <div className="col-md-3 photo">
                        <img src={abhishek} className="img-fluid" alt="mage4" />
                        <strong>Harsh Pratap Singh</strong>{" "}
                        <p>Frontend Developer</p>
                    </div>
                </div>
            </div>
        </Container>
    );
}

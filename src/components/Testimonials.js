import React from "react";
import "./Testimonials.css";
import ticon from "../assets/ticon.png";
import p1 from "../assets/p2.png";
import p2 from "../assets/p1.png";
import p3 from "../assets/p4.png";
import p4 from "../assets/p3.png";
import p5 from "../assets/p5.png";
import u1 from "../assets/u2.png";
import u2 from "../assets/u1.png";
import u3 from "../assets/u4.png";
import u4 from "../assets/u3.png";
import u5 from "../assets/u5.png";

export default function Testimonials() {
    return (
        <section className="testimonials">
            <div className="testimonials-header">
                <div className="top-line2" />
                <div className="header-row">
                    <span className="testimonials-slash">{'//'}</span>
                    <span className="testimonials-title">TESTIMONIALS</span>
                    <span className="testimonials-slash">{'//'}</span>
                </div>
            </div>

            <div className="testimonials-quote">
                <img src={ticon} alt="quote" />
            </div>

            <div className="testimonials-cards">
                <div className="testimonial-card left top">
                    <p className="testimonial-text">
                        “THE MOTION WORK BROUGHT OUR BRAND TO LIFE. SMOOTH, PURPOSEFUL, AND NEVER DISTRACTING — EXACTLY WHAT WE NEEDED.”
                    </p>
                    <div className="testimonial-footer">
                        <div className="footer-left">
                            <img src={p1} alt="avatar" className="avatar" />
                            <div className="meta">
                                <span className="name">Bobby Clarkson</span>
                                <span className="role">CEO & Founder</span>
                            </div>
                        </div>
                        <img src={u1} alt="brand" className="brand-img" />
                    </div>
                </div>

                <div className="testimonial-card right top">
                    <p className="testimonial-text">
                        “WORKING WITH HIM FELT EFFORTLESS. HE UNDERSTANDS USER BEHAVIOR DEEPLY AND TRANSLATES IDEAS INTO CLEAN, FUNCTIONAL DESIGNS.”
                    </p>
                    <div className="testimonial-footer">
                        <div className="footer-left">
                            <img src={p2} alt="avatar" className="avatar" />
                            <div className="meta">
                                <span className="name">Thiago Alcantara</span>
                                <span className="role">Marketing Manager</span>
                            </div>
                        </div>
                        <img src={u2} alt="brand" className="icon-img" />
                    </div>
                </div>

                <div className="testimonial-card left middle">
                    <p className="testimonial-text">“After the redesign, our bounce rate dropped significantly and conversions went up. The UX decisions were spot-on.”</p>
                    <div className="testimonial-footer">
                        <div className="footer-left">
                            <img src={p3} alt="avatar" className="avatar" />
                            <div className="meta">
                                <span className="name">Lukas Franklin</span>
                                <span className="role">Head of Product</span>
                            </div>
                        </div>
                        <img src={u3} alt="brand" className="icon-img" />
                    </div>
                </div>

                <div className="testimonial-card right middle">
                    <p className="testimonial-text">
                        “THE BRAND IDENTITY PERFECTLY CAPTURED OUR VISION. LOGO, COLORS, AND TYPOGRAPHY FEEL INTENTIONAL AND PREMIUM.”
                    </p>
                    <div className="testimonial-footer">
                        <div className="footer-left">
                            <img src={p4} alt="avatar" className="avatar" />
                            <div className="meta">
                                <span className="name">Nathan Drake</span>
                                <span className="role">Design Lead</span>
                            </div>
                        </div>
                        <img src={u4} alt="brand" className="brand-img" />
                    </div>
                </div>

                <div className="testimonial-card center bottom">
                    <p className="testimonial-text">
                        “DESIGN AND DEVELOPMENT IN ONE PLACE SAVED US TIME AND MONEY. THE FINAL PRODUCT WAS FAST, RESPONSIVE, AND PIXEL-PERFECT.”
                    </p>
                    <div className="testimonial-footer">
                        <div className="footer-left">
                            <img src={p5} alt="avatar" className="avatar" />
                            <div className="meta">
                                <span className="name">Andrew Robertson</span>
                                <span className="role">Owner</span>
                            </div>
                        </div>
                        <img src={u5} alt="brand" className="signature-img" />
                    </div>
                </div>

                <div className="testimonial-card center bottom2">
                    <p className="testimonial-text">
                        “Design and development in one place saved us time and money. The final product was fast, responsive, and pixel-perfect.”
                    </p>
                    <div className="testimonial-footer">
                        <div className="footer-left">
                            <img src={p5} alt="avatar" className="avatar" />
                            <div className="meta">
                                <span className="name">Andrew Robertson</span>
                                <span className="role">Owner</span>
                            </div>
                        </div>
                        <img src={u5} alt="brand" className="signature-img" />
                    </div>
                </div>
            </div>
        </section>
    );
}

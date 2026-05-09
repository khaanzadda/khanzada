import React from "react";
import { motion } from "framer-motion";
import "./Hero.css";
import profile from "../assets/profile.png";
import i1 from "../assets/i1.png";
import i2 from "../assets/i2.png";
import i3 from "../assets/i3.png";

const EASE = [0.16, 1, 0.3, 1];
const textLeft = {
    hidden: { opacity: 0, x: -180 },
    visible: { opacity: 1, x: 0 }
};

const textRight = {
    hidden: { opacity: 0, x: 180 },
    visible: { opacity: 1, x: 0 }
};

const labelFade = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
};

export default function Hero() {
    return (
        <section className="hero">
            <div className="hero-grid" />
            <div className="hero-container">
                <motion.div
                    className="label-top"
                    variants={labelFade}
                    initial="hidden"
                    animate="visible"
                    transition={{ delay: 1.1, duration: 0.6 }}
                >
                    CUSTOM AI SOLUTIONS <br /> & INTEGRATION
                </motion.div>
                <div className="hero-left">
                    <motion.div
                        className="label-left"
                        variants={labelFade}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.2, duration: 0.6 }}
                    >
                        WEB & APP <br /> DEVELOPMENT
                    </motion.div>
                    <motion.h1
                        className="hero-line"
                        variants={textLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 1, ease: EASE }}
                    >
                        <span className="hero-text">
                            TRANS
                            <span className="icon-inline">
                                <img src={i1} alt="" />
                            </span>
                            FORMING
                        </span>
                    </motion.h1>
                    <motion.div
                        className="hero-row"
                        variants={textRight}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.15, duration: 1, ease: EASE }}
                    >
                        <h1 className="hero-line2">
                            <span className="hero-text">
                                IDEAS
                                <span className="icon-inline">
                                    <img src={i2} alt="" />
                                </span>
                                INTO
                            </span>
                        </h1>

                        <motion.a
                            href="https://www.upwork.com/freelancers/~01cc9384a787cfb4fe?companyReference=1567804226158288897&mp_source=share"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hero-cta"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
                        >
                            Work with me <span>↗</span>
                        </motion.a>
                    </motion.div>
                    <motion.div
                        className="label-left bottom"
                        variants={labelFade}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.35, duration: 0.6 }}
                    >
                        SYSTEM <br /> INTEGRATION <br /> & CLOUD
                    </motion.div>
                    <motion.h1
                        className="hero-line3 blue-text"
                        variants={textLeft}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 0.4, duration: 1, ease: EASE }}
                    >
                        <span className="hero-text">
                            EXPERI
                            <span className="icon-inline">
                                <img src={i3} alt="" />
                            </span>
                            ENCES
                        </span>

                    </motion.h1>
                    <motion.a
                        href="https://www.upwork.com/freelancers/~01cc9384a787cfb4fe?companyReference=1567804226158288897&mp_source=share"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero-cta2"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.1, duration: 0.2, ease: "easeOut" }}
                    >
                        Work with me <span>↗</span>
                    </motion.a>
                    <motion.div
                        className="label-bottom"
                        variants={labelFade}
                        initial="hidden"
                        animate="visible"
                        transition={{ delay: 1.5, duration: 0.6 }}
                    >
                        MAINTENANCE <br /> & SECURITY
                    </motion.div>
                </div>
                <div className="profile-card">
                    <img src={profile} alt="Taha Hashmi" />
                    <h3>Khanzada Khan</h3>
                    <p>Junior Developer</p>
                    <div className="profile-info">
                        <div><strong>Frontend</strong><span>React</span></div>
                        <div><strong>Backend</strong><span>Firebase,Mongodb</span></div>
                        {/* <div><strong>Designer</strong><span>Adobe</span></div>
                        <div><strong>Motion Designer</strong><span>After Effects</span></div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

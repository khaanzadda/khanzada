import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import img1 from "../assets/s1.png";
import img2 from "../assets/s2.png";
import img3 from "../assets/s3.png";
import img4 from "../assets/s4.png";

const positionOrder = ["branding", "uiux", "development", "animation"];

const serviceData = [
    { name: "BRANDING", img: img1, label: ["Web & App Design", "UX Research"], pos: "branding" },
    { name: "UI/UX", img: img2, label: ["Logo Design", "Graphic"], pos: "uiux" },
    { name: "DEVELOPMENT", img: img3, label: ["Web Development"], pos: "development" },
    { name: "ANIMATION", img: img4, label: ["Motion Video", "Interactive"], pos: "animation" },
];

const POSITIONS = [
    { x: "-29vw", y: "-20vh", scale: 1 },
    { x: "30vw", y: "-12vh", scale: 1 },
    { x: "28vw", y: "22vh", scale: 1 },
    { x: "-28vw", y: "20vh", scale: 1 },
];

const MOBILE_POSITIONS = [
    { x: 0, y: 20, scale: 1 },  // top-left
    { x: 0, y: 20, scale: 1 },  // top-right
    { x: -6, y: 40, scale: 1 }, // bottom-left
    { x: 6, y: 40, scale: 1 },  // bottom-right
];

export default function Services() {
    const [active, setActive] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const interval = setInterval(() => {
            setActive((prev) => (prev + 1) % serviceData.length);
        }, 2800);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className="services">
            <div className="feature-header2">
                <div className="top-line3" />
                <div className="header-row2">
                    <span className="slashes222">{'//'}</span>
                    <span className="title2">SERVICES</span>
                    <span className="slashes22">{'//'}</span>
                </div>
            </div>

            <div className="services-grid" />

            <div className="services-text">
                {serviceData.map((item, i) => {
                    const isActive = active === i;
                    return (
                        <motion.h1
                            key={item.name}
                            className={`service-line ${positionOrder[i]} ${isActive ? "active" : ""}`}
                            animate={{ opacity: isActive ? 1 : 0.45 }}
                            transition={{ duration: 0.2 }}
                        >
                            {item.name}
                        </motion.h1>
                    );
                })}
            </div>

            <div className="services-images">
                {serviceData.map((item, i) => {
                    const isActive = active === i;
                    const posIndex = (i + active + serviceData.length) % serviceData.length;
                    const basePos = isMobile
                        ? MOBILE_POSITIONS[i]
                        : POSITIONS[posIndex];

                    // Mobile animation: active card slightly up + scale, others slightly down
                    const animatePos = isMobile
                        ? {
                            x: basePos.x,
                            y: basePos.y + (isActive ? -10 : 6),
                            scale: isActive ? 1.08 : 0.95,
                            opacity: isActive ? 1 : 0.85,
                        }
                        : basePos;

                    return (
                        <React.Fragment key={item.name}>
                            <motion.div
                                className="service-card"
                                initial={false}
                                animate={animatePos}
                                transition={{
                                    duration: isMobile ? 0.5 : 0.85,
                                    ease: [0.4, 0, 0.2, 1],
                                }}
                                style={{ zIndex: isActive ? 5 : 1 }}
                            >
                                <img src={item.img} alt={item.name} />
                            </motion.div>

                            <div className={`service-label-fixed ${item.pos}`}>
                                {item.label.map((text, idx) => (
                                    <span key={idx}>{text}</span>
                                ))}
                            </div>
                        </React.Fragment>
                    );
                })}
            </div>
        </section>
    );
}

import React, { useEffect } from "react";
import "./FeaturedWorks.css";
import arrowIcon from "../assets/arrow.png";
import hopkins from "../assets/hopkins2.png";
import locus from "../assets/locus.png";
import crm from "../assets/crm.png";
import bj from "../assets/bj.png";
import rungdo from "../assets/rungdo.png";
import stride from "../assets/stride.png";

const works = [
    {
        title: "Hopkins Restorative",
        tags: ["UI/UX", "Web", "Health care"],
        image: hopkins,
        size: "large",
    },
    {
        title: "Locus +",
        tags: ["BRANDING"],
        image: locus,
        size: "small",
    },
    {
        title: "Customer Portal CRM",
        tags: ["UI/UX", "CRM", "Dashboard"],
        image: crm,
        size: "wide",
    },
    {
        title: "B&J Afro Caribbean",
        tags: ["UI/UX", "Web Design", "E-Commerce"],
        image: bj,
        size: "wide",
    },
    {
        title: "Rung Do",
        tags: ["UI/UX", "Web Design"],
        image: rungdo,
        size: "small",
    },
    {
        title: "Hopkins Restorative",
        tags: ["UI/UX", "Web", "Health care"],
        image: hopkins,
        size: "large",
    },
    {
        title: "Stride Branding",
        tags: ["UI/UX", "CRM", "Dashboard"],
        image: stride,
        size: "long",
    },
];

export default function FeaturedWorks() {
    useEffect(() => {
        const subtitle = document.querySelector(".subtitle");
        const sentinel = document.querySelector(".subtitle-sentinel");

        const observer = new IntersectionObserver(
            ([entry]) => {
                subtitle.classList.toggle("is-stuck", !entry.isIntersecting);
            },
            { threshold: 0 }
        );

        observer.observe(sentinel);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="featured">
            <div className="feature-header">
                <div className="top-line" />
                <div className="header-row">
                    <span className="slashes">{'//'}</span>
                    <span className="title4">FEATURED WORKS</span>
                    <span className="slashes4">{'//'}</span>
                </div>
            </div>

            <div className="subtitle-sentinel" />
            <p className="subtitle">
                A curated selection of projects that reflect our commitment
                <br />
                to simplicity and purposeful design.
            </p>

            <div className="works-grid">
                {works.map((item, index) => (
                    <div key={index} className={`work-item ${item.size}`}>
                        <div className="work-image-stack">
                            <div className="work-image">
                                {item.title === "Hopkins Restorative" ? (
                                    <>
                                        <div className="hopkins-preview">
                                            <img src={item.image} alt={item.title} />
                                        </div>

                                        {/* <div className="hopkins-title">
                                            <span>{item.title}</span>
                                        </div> */}
                                    </>
                                ) : (
                                    <img src={item.image} alt={item.title} />
                                )}
                            </div>

                            <div className="arrow">
                                <img src={arrowIcon} alt="View project" />
                            </div>
                        </div>

                        <div className="work-bottom-row">
                            <div className="work-below">
                                <h3>{item.title}</h3>
                                <div className="tags">
                                    {item.tags.map((tag, i) => (
                                        <span key={i}>{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="hire">
                <div className="hire-circle">
                    <span>+</span>
                    <p>HIRE ME</p>
                </div>
            </div>
        </section>
    );
}

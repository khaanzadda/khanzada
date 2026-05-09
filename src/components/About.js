import "./About.css";
import profile from "../assets/profile.png";

export default function About() {
    return (
        <section className="about">
            <div className="about-heading">
                <span className="line" />
                <span className="name">Khanzada Khan</span>
                <span className="line" />
            </div>

            <h2 className="about-title">
                Pushing Brands <span>since 2025</span>
            </h2>

            <div className="about-content">
                <div className="about-image">
                    <div className="image-card">
                        <img src={profile} alt="Taha Hashmi" />
                    </div>
                    <h4>Khanzada khan</h4>
                    <p>Junior Developer</p>
                </div>

                <div className="about-info">
                    <p className="about-description">
                        I'm Khanzada khan, a junior developer with a passion for web development and
                        graphic design. I focus on creating clean, intuitive user
                        experiences, smooth animations, and strong visual identities
                        that help brands stand out. I believe good design is simple,
                        functional, and memorable, and I enjoy turning ideas into
                        visuals that feel both modern and purposeful.
                    </p>

                    <div className="about-roles">
                        <div>
                            <strong>Frontend</strong>
                            <span>React</span>
                            <span className="time"><strong>2025 → Now</strong></span>
                        </div>
                        <div>
                            <strong>Backend</strong>
                            <span>Firebase,Mongodb</span>
                            <span className="time"><strong>2025 → Now</strong></span>
                        </div>
                        {/* <div>
                            <strong>Graphic Designer</strong>
                            <span>Adobe</span>
                            <span className="time"><strong>2021 → Now</strong></span>
                        </div>
                        <div>
                            <strong>Motion Designer</strong>
                            <span>After Effects</span>
                            <span className="time"><strong>2021 → Now</strong></span>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

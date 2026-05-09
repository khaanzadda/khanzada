import "./About.css";
import profile from "../assets/profile.png";

export default function About() {
    return (
        <section className="about">
            <div className="about-heading">
                <span className="line" />
                <span className="name">Taha Hashmi</span>
                <span className="line" />
            </div>

            <h2 className="about-title">
                Pushing Brands <span>since 2021</span>
            </h2>

            <div className="about-content">
                <div className="about-image">
                    <div className="image-card">
                        <img src={profile} alt="Taha Hashmi" />
                    </div>
                    <h4>Taha Hashmi</h4>
                    <p>UI/UX Designer | Motion & Graphic Designer</p>
                </div>

                <div className="about-info">
                    <p className="about-description">
                        I'm Taha Hashmi, a UI/UX designer with a passion for motion and
                        graphic design. I focus on creating clean, intuitive user
                        experiences, smooth animations, and strong visual identities
                        that help brands stand out. I believe good design is simple,
                        functional, and memorable, and I enjoy turning ideas into
                        visuals that feel both modern and purposeful.
                    </p>

                    <div className="about-roles">
                        <div>
                            <strong>Founder</strong>
                            <span>Inventocube</span>
                            <span className="time"><strong>2021 → Now</strong></span>
                        </div>
                        <div>
                            <strong>UI/UX Designer</strong>
                            <span>Figma</span>
                            <span className="time"><strong>2021 → Now</strong></span>
                        </div>
                        <div>
                            <strong>Graphic Designer</strong>
                            <span>Adobe</span>
                            <span className="time"><strong>2021 → Now</strong></span>
                        </div>
                        <div>
                            <strong>Motion Designer</strong>
                            <span>After Effects</span>
                            <span className="time"><strong>2021 → Now</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

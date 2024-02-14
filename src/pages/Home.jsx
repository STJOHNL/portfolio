import { Link } from "react-router-dom"
import LogoCarousel from "../components/LogoCarousel"
import loganLego from '../assets/images/loganLego.gif'
import ProjectCard from "../components/ProjectCard"
import projectOne from '../assets/images/projects/GroupRunApp.png'
import projectTwo from '../assets/images/projects/MyUncommonPlan.png'
import projectThree from '../assets/images/projects/FitFlow.png'

const Home = () => {
    return (
        <>
            <section className="hero-section">
                <div className="hero-title">
                    <h1>Logan St. John</h1>
                    <h2>Software Developer</h2>
                </div>
                <div className="hero-cta">
                    <div className="absolute-container">
                        <div className="hero-btn-container glass">
                            <Link
                                to="/"
                                className="btn"
                            >About</Link>
                            <Link
                                to="/"
                                className="btn"
                            >Contact</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className="white-container">
                <section className="client-slider">
                    <h3>I'm grateful to have worked with such clients</h3>
                    <LogoCarousel />
                </section>
            </div>
            <section className="portfolio-section">
                <div className="title-blurb">
                    <h3>My work</h3>
                    <p>Explore a selection of client and personal projects I've developed.</p>
                </div>
                <section className="portfolio-cards">
                    <ProjectCard
                        title={'Group Run Application'}
                        image={projectOne}
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam exercitationem doloribus minus quasi aut'}
                    />
                    <ProjectCard
                        title={'MyUncommonPlan'}
                        image={projectTwo}
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam exercitationem doloribus minus quasi aut'}
                    />
                    <ProjectCard
                        title={'FitFlow'}
                        image={projectThree}
                        description={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam exercitationem doloribus minus quasi aut'}
                    />
                </section>
                <Link
                    to='/portfolio'
                    className="btn"
                >View more projects</Link>
            </section>
            <section className="about-section">
                <img
                    src={loganLego}
                    alt="Logan with a Lego statue"
                />
                <div>
                    <h3>About</h3>
                    <p>Skilled Full Stack Developer with expertise in JavaScript, Node.js, MongoDB, and React, delivering dynamic web solutions that boost business growth.</p>
                    <Link
                        to='/about'
                        className="btn"
                    >Learn more</Link>
                </div>
            </section>
        </>
    )
}
export default Home
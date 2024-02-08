import { Link } from "react-router-dom"

const Home = () => {
    return (
        <>
            <section className="hero-section">
                <h1>I'm Logan.</h1>
                <h2>Software Developer</h2>
                <img src="https://placekitten.com/200/300" alt="" />
            </section>
            <section className="about-section">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere atque amet voluptatem, minima ipsum beatae incidunt, maiores vero pariatur hic aliquid fugiat perferendis, impedit numquam dolor distinctio.</p>
                <Link>Learn more</Link>
            </section>
            <section className="portfolio-section">
                <h3>My work</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere atque amet voluptatem, minima ipsum beatae incidunt, maiores vero pariatur hic aliquid fugiat perferendis, impedit numquam dolor distinctio.</p>
                <section className="portfolio-cards">
                    <div className="portfolio-card">
                        <img src="https://placekitten.com/300/300" alt="" />
                        <h5>Project Name</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam exercitationem doloribus minus quasi aut!</p>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://placekitten.com/300/300" alt="" />
                        <h5>Project Name</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam exercitationem doloribus minus quasi aut!</p>
                    </div>
                    <div className="portfolio-card">
                        <img src="https://placekitten.com/300/300" alt="" />
                        <h5>Project Name</h5>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero veniam exercitationem doloribus minus quasi aut!</p>
                    </div>
                </section>
                <Link>Portfolio</Link>
            </section>
            <section className="contact-section">
                <h3>Get in touch</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facere atque amet voluptatem, minima ipsum beatae incidunt, maiores vero pariatur hic aliquid fugiat perferendis, impedit numquam dolor distinctio.</p>
                <Link>Contact me</Link>
            </section>
        </>
    )
}
export default Home
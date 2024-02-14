const ProjectCard = ({ title, image, description }) => {
    return (
        <div className="portfolio-card dark-glass">
            <h5 className="mb-10">{title}</h5>
            <img src={image} alt={title} />
            <p>{description}</p>
        </div>
    )
}
export default ProjectCard
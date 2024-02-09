import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faUpwork } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
    return (
        <footer>
            <h3>Get in touch</h3>
            <Link>
                <FontAwesomeIcon icon={faEnvelope} className="icon" />
            </Link>
            <Link>
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </Link>
            <Link>
                <FontAwesomeIcon icon={faUpwork} className="icon" />
            </Link>
            <Link>
                <FontAwesomeIcon icon={faGithub} className="icon" />
            </Link>
        </footer>
    )
}

export default Footer
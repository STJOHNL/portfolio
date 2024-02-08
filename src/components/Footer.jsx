import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faUpwork } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return (
        <footer>
            <Link>
                <FontAwesomeIcon icon={faLinkedinIn} className="icon" />
            </Link>
            <Link>
                <FontAwesomeIcon icon={faGithub} className="icon" />
            </Link>
            <Link>
                <FontAwesomeIcon icon={faUpwork} className="icon" />
            </Link>
        </footer>
    )
}

export default Footer
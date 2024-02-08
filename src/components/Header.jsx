import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    )
}

export default Header
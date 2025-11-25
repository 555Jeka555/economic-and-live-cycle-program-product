import {useState} from 'react'
import {Link, useLocation} from 'react-router-dom'

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)
	const location = useLocation()

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<header className="header">
			<div className="container">
				<div className="header-content">
					<Link to="/" className="logo" onClick={closeMenu}>
						<span className="logo-icon">🎯</span>
						Learn+
					</Link>

					<nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
						<Link
							to="/"
							className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
							onClick={closeMenu}
						>
							Главная
						</Link>
						<Link
							to="/features"
							className={`nav-link ${location.pathname === '/features' ? 'active' : ''}`}
							onClick={closeMenu}
						>
							Возможности
						</Link>
						<Link
							to="/structure"
							className={`nav-link ${location.pathname === '/structure' ? 'active' : ''}`}
							onClick={closeMenu}
						>
							О компании
						</Link>
						<Link
							to="/contacts"
							className={`nav-link ${location.pathname === '/contacts' ? 'active' : ''}`}
							onClick={closeMenu}
						>
							Контакты
						</Link>
					</nav>

					<button
						className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
						onClick={toggleMenu}
						aria-label="Toggle menu"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
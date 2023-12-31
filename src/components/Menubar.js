import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../img/logo.svg"
import { Link } from "react-router-dom";

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Link to="/"><img src={Logo} alt="" /></Link>
				<nav ref={navRef}>
					<Link to="/">Home</Link>
					<Link to="/products">Products</Link>
					<Link to="/about">About Us</Link>
					<Link to="/contact">Contact</Link>
					<button
						className="nav-btn nav-close-btn"
						onClick={showNavbar}>
						<FaTimes />
					</button>
				</nav>
				<button
					className="nav-btn"
					onClick={showNavbar}>
					<FaBars />
				</button>
		</header>
	);
}

export default Navbar;
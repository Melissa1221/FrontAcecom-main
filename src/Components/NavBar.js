import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Typography } from "@mui/material";
import "./styles/header.css";

function NavBar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	return (
		<header>
			<Typography variant="h5" >Proyecto Acecom</Typography>
			
			<nav ref={navRef}>
				<a href="#GraficaPH">ph</a>
                <a href="#GraficaTemp">Temperatura</a>
                <a href="#GraficaTurb">Turbidez</a>
                <a href="#GraficaSolidos">Residuos</a>
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

export default NavBar;
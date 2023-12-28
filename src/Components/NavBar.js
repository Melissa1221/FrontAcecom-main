import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Typography } from "@mui/material";
import "./styles/header.css";
import { useTranslation } from "react-i18next";
import spanish from "../images/spanish.svg";
import english from "../images/english.svg";
function NavBar() {
	const [t, i18n] = useTranslation("global");
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};

	

	return (
		<header>
			<Typography variant="h5" >{t("navbar.acecom-project")} </Typography>
			
			<nav ref={navRef}>
				<a href="#GraficaPH">ph</a>
                <a href="#GraficaTemp">{t("navbar.temperature")} </a>
                <a href="#GraficaTurb">{t("navbar.turbidity")} </a>
                <a href="#GraficaSolidos">{t("navbar.solidity")} </a>
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
			<div className="lenguages">
				<button onClick={() => i18n.changeLanguage("es")} > <img src={spanish}/></button>
				<button onClick={() => i18n.changeLanguage("en")} > <img src={english}/></button>
			</div>
			
		</header>
	);
}

export default NavBar;
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar my-2 d-flex justify-content-end col-11">
			<Link to="/demo">
				<button className="btn btn-success">Add new contact</button>
			</Link>
		</nav>
	);
};

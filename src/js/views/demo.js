import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Form } from "../component/form.jsx";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="col-11 m-auto">
			<Form />
			<Link to="/">or get back to contacts</Link>
		</div>
	);
};

import React from "react";
import { Link } from "react-router-dom";

import { PiDiamondsFourFill } from "react-icons/pi";

const Footer = () => {
	return (
		<div className="flex items-center justify-between h-56 px-2 bg-gray-700 md:px-24 text-rose-100">
			<div className="pr-12 border-r-2 border-rose-700">
				<h1 className="mb-8 text-2xl tracking-widest border-b-4 border-b-3 border-rose-900 drop-shadow-lg">
					NEWSHOP
				</h1>
				<ul className="text-sm">
					<Link to="/">
						<li>Home</li>
					</Link>
					<Link to="/categories">
						<li>Products</li>
					</Link>

					<li>
						<a target="_blank" href="https://www.linkedin.com/in/shehab-web1/">
							Contact
						</a>
					</li>
				</ul>
			</div>
			<div className="flex flex-col items-center justify-center h-full text-sm text-center text-gray-400">
				<h1 className="tracking-widest text-md">NEWSHOP</h1>
				<p>Newshop bro i dont know either</p>
				<a
					target="_blank"
					href="https://github.com/shehabweb1"
					className="flex items-center gap-4 mt-12 text-gray-500"
				>
					<PiDiamondsFourFill />
					made by Shehab (2023) - react.js frontend solo project
					<PiDiamondsFourFill />
				</a>
			</div>
			<div></div>
		</div>
	);
};

export default Footer;

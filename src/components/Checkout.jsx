import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

const Checkout = () => {
	const { cart, setSelectedCategory } = useContext(Context);
	return (
		<div className="w-full col-span-5">
			<div className="px-4 py-12 text-center text-gray-400">
				<p>payment method is not implemented yet.</p>
				<p>maybe soon if i'm experienced enough.</p>
				<p>maybe when i've become a legit full stack web dev.</p>
				<p>
					im a frontend web dev for now, and still learning but i will get there
					i promise.
				</p>
				<p>
					im actually planning to use this project and launch it for real for my
					attempt on clothing business, SOON
				</p>

				<p className="mt-8">list of things are yet to be implemented :</p>
				<ol>
					<li>animation - maybe using framer motion</li>
					<li>actual payment method - maybe using stripe or qris?</li>
					<li>authentication - this one idk bro</li>
				</ol>
				<Link to="/categories">
					<button
						onClick={() => setSelectedCategory("all")}
						className="px-3 py-1 mt-8 rounded-md bg-rose-900 text-rose-100"
					>
						Back
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Checkout;

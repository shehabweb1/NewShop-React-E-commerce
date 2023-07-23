import React, { useContext } from "react";
import { Context } from "../context/Context";

import ProductCard from "./ProductCard";

import { PiDiamondsFourFill } from "react-icons/pi";

const Home = ({ setToggleCart }) => {
	const { allProducts } = useContext(Context);

	const featuredItemsElement = allProducts.map((item, i) => (
		<ProductCard
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.price}
			type={item.type}
			color={item.color}
			size={item.size}
			altId={item.altId}
			setToggleCart={setToggleCart}
		/>
	));

	return (
		<>
			<section>
				<h1 className="flex items-center gap-2 px-0 pb-4 mx-2 my-8 text-2xl border-b">
					<PiDiamondsFourFill className="text-base text-rose-700" />
					Featured Items
				</h1>
				<div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 md:grid-cols-4">
					{featuredItemsElement}
				</div>
			</section>
		</>
	);
};

export default Home;

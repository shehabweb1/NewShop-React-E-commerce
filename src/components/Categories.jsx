import React, { useState, useContext } from "react";
import { Context } from "../context/Context";

import ProductCard from "./ProductCard";

import { PiDiamondsFourFill } from "react-icons/pi";
import { BiCategoryAlt } from "react-icons/bi";

const Categories = ({ setToggleCart }) => {
	const { allProducts, selectedCategory, setSelectedCategory } =
		useContext(Context);

	const filteredItems =
		selectedCategory === "all"
			? allProducts
			: allProducts.filter((item) => item.type === selectedCategory);

	const filteredItemsElement = filteredItems.map((item, i) => (
		<ProductCard
			key={item.id}
			id={item.id}
			name={item.name}
			price={item.price}
			type={item.type}
			color={item.color}
			size={item.size}
			altId={item.altId}
			quantity={item.quantity}
			setToggleCart={setToggleCart}
		/>
	));

	const categoriesArray = [...new Set(allProducts.map((item) => item.type))];

	const categoriesElement = categoriesArray.map((item, i) => (
		<button
			key={i}
			onClick={() => setSelectedCategory(item)}
			className={`px-4 py-2 text-sm border  border-rose-900 hover:bg-rose-900 hover:text-rose-100 cursor-pointer  ${
				selectedCategory === item && "bg-rose-900 text-rose-100"
			}`}
		>
			{item}
		</button>
	));

	return (
		<>
			<section>
				<h1 className="flex items-center gap-2 px-0 pb-4 mx-2 my-8 text-2xl border-b">
					<PiDiamondsFourFill className="text-base text-rose-700" />
					Categories
				</h1>
				<div className="flex flex-wrap gap-2 mx-2 mb-8">
					<BiCategoryAlt className="pr-2 mr-4 text-4xl border-r text-rose-700" />
					<button
						onClick={() => setSelectedCategory("all")}
						className={`px-4 py-2 text-sm border  border-rose-900 hover:bg-rose-900 hover:text-rose-100 cursor-pointer  ${
							selectedCategory === "all" && "bg-rose-900 text-rose-100"
						}`}
					>
						All
					</button>
					{categoriesElement}
				</div>
			</section>

			<section>
				<h2 className="mx-2 mb-4 text-xl text-center">
					{selectedCategory} products
				</h2>
				<div className="grid grid-cols-2 gap-2 px-2 sm:grid-cols-3 md:grid-cols-4">
					{filteredItemsElement}
				</div>
			</section>
		</>
	);
};

export default Categories;

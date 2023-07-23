import React, { useState, createContext } from "react";
import { productsArray } from "../data/data";

const Context = createContext();

const ContextProvider = ({ children }) => {
	const [allProducts, setAllProducts] = useState(productsArray);
	const [selectedCategory, setSelectedCategory] = useState("all");
	const [cart, setCart] = useState([]);

	const setNewAltId = (thisProductDataFunction) => {
		thisProductDataFunction((prev) => ({
			...prev,
			altId: `${prev.id}${prev.type}${prev.size}${prev.color}`,
		}));
	};

	const chooseSize = (selectedSize, thisProductDataFunction) => {
		thisProductDataFunction((prev) => ({ ...prev, size: selectedSize }));
		setNewAltId(thisProductDataFunction);
	};

	const chooseColor = (selectedColor, thisProductDataFunction) => {
		thisProductDataFunction((prev) => ({ ...prev, color: selectedColor }));
		setNewAltId(thisProductDataFunction);
	};

	const plusQuantity = (thisProductDataFunction) => {
		thisProductDataFunction((prev) => ({
			...prev,
			quantity: prev.quantity + 1,
		}));
	};

	const minusQuantity = (thisProductDataFunction) => {
		thisProductDataFunction((prev) => ({
			...prev,
			quantity: prev.quantity - 1,
		}));
	};

	const addToCart = (thisProductDataState) => {
		setCart((prev) => {
			const isExistInCart = prev.some(
				(item) => item.altId === thisProductDataState.altId
			);
			if (isExistInCart) {
				return prev.map((item) =>
					item.altId === thisProductDataState.altId
						? {
								...item,
								quantity: item.quantity + thisProductDataState.quantity,
						  }
						: item
				);
			} else {
				return [...prev, thisProductDataState];
			}
		});
	};

	const countCart = () => {
		let total = 0;
		cart.forEach((item) => (total += item.quantity));
		return total;
	};

	return (
		<Context.Provider
			value={{
				allProducts,
				selectedCategory,
				cart,
				setSelectedCategory,
				setCart,
				countCart,
				plusQuantity,
				minusQuantity,
				chooseSize,
				chooseColor,
				setNewAltId,
				addToCart,
			}}
		>
			{children}
		</Context.Provider>
	);
};

export { ContextProvider, Context };

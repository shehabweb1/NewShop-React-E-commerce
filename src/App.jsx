import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import Categories from "./components/Categories";
import ProductDetails from "./components/ProductDetails";
import Checkout from "./components/Checkout";
import Footer from "./components/Footer";
import CartPopout from "./components/CartPopout";

function App() {
	const [toggleCart, setToggleCart] = useState(false);

	return (
		<>
			<header className="fixed z-10 w-full">
				<Header setToggleCart={setToggleCart} />
			</header>

			<main className="flex justify-center py-32">
				<section className="w-full max-w-5xl sm:h-screen ">
					<Routes>
						<Route
							exact
							path="/"
							element={<Home setToggleCart={setToggleCart} />}
						/>
						<Route
							path="/categories"
							element={<Categories setToggleCart={setToggleCart} />}
						/>
						<Route
							path="/categories/:productId"
							element={<ProductDetails setToggleCart={setToggleCart} />}
						/>
						<Route path="/checkout" element={<Checkout />} />
					</Routes>
				</section>
			</main>

			{/* pop out cart */}
			{toggleCart && <CartPopout setToggleCart={setToggleCart} />}

			<footer className="mt-24 ">
				<Footer />
			</footer>
		</>
	);
}

export default App;

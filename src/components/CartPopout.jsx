import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/Context";

import image from "../assets/default-img.png";

import { BiChevronRight } from "react-icons/bi";
import { BsFillCartXFill } from "react-icons/bs";

const CartPopout = ({ setToggleCart }) => {
	const { cart, setCart, countCart } = useContext(Context);

	const plusQuantityInCart = (altid) => {
		setCart((prev) =>
			prev.map((item) =>
				item.altId === altid ? { ...item, quantity: item.quantity + 1 } : item
			)
		);
	};

	const minusQuantityInCart = (altid) => {
		setCart((prev) =>
			prev.map((item) =>
				item.altId === altid ? { ...item, quantity: item.quantity - 1 } : item
			)
		);
	};

	const deleteItemInCart = (altid) => {
		setCart((prev) => prev.filter((item) => item.altId !== altid));
	};

	const countTotalPrice = () => {
		let total = 0;
		cart.forEach((item) => (total += item.price * item.quantity));
		return total;
	};

	const itemsInCartElement = cart.map((item, i) => (
		<div
			key={i}
			className="relative flex items-center gap-2 px-2 py-1 mb-4 overflow-hidden border shadow-sm rounded-xl"
		>
			<div onClick={() => setToggleCart(false)} className="w-2/5">
				<Link to={`/categories/${item.id}`}>
					<img src={image} />
				</Link>
			</div>
			<div className="w-3/5 text-xs">
				<div className="flex justify-center p-2 text-sm border-b ">
					<Link to={`/categories/${item.id}`}>{item.name}</Link>
				</div>

				<div className="flex items-center justify-between gap-4 p-2">
					<p>{item.type}</p>
					<p className={`bg-${item.color} w-6 h-6 rounded-full`}></p>
					<p>{item.size.toUpperCase()}</p>
				</div>

				<div className="flex items-center justify-between px-2">
					<div className="flex">
						<button
							className="px-3 py-2 border rounded-l-xl text-rose-900"
							onClick={() => plusQuantityInCart(item.altId)}
						>
							+
						</button>
						<p className="p-2 border-y">{item.quantity}</p>
						<button
							className="px-3 py-2 border rounded-r-xl text-rose-900"
							onClick={() => minusQuantityInCart(item.altId)}
							disabled={item.quantity < 2 ? true : false}
						>
							-
						</button>
					</div>
					<button
						className="text-2xl text-rose-900"
						onClick={() => deleteItemInCart(item.altId)}
					>
						<BsFillCartXFill />
					</button>
				</div>
			</div>
			<p className="absolute top-0 left-0 w-16 p-3 font-semibold text-center rounded-br-xl text-rose-100 bg-rose-900">
				${item.price * item.quantity}
				<span className="text-xs">.00</span>
			</p>
		</div>
	));

	return (
		<>
			<section
				onClick={() => setToggleCart((prev) => !prev)}
				className="fixed top-0 right-0 z-50 w-full h-screen bg-gray-100 bg-opacity-10 backdrop-filter backdrop-blur-sm"
			>
				<div
					onClick={(e) => e.stopPropagation()}
					className="absolute right-0 h-full px-4 py-8 text-sm bg-white shadow-xl opac rounded-l-2xl w-80"
				>
					<button
						onClick={() => setToggleCart((prev) => !prev)}
						className="flex items-center mb-4"
					>
						<BiChevronRight className="text-xl" /> Cart
						<span className="flex items-center justify-center w-8 h-8 ml-2 rounded-full text-rose-100 bg-rose-900">
							{countCart()}
						</span>
					</button>

					<div className="flex items-end justify-between pb-4 border-b">
						<p>
							total price :{" "}
							<span className="text-lg font-semibold">
								${countTotalPrice()}
								<span className="text-xs">.00</span>
							</span>
						</p>
						<Link to="/checkout">
							<button
								onClick={() => setToggleCart(false)}
								disabled={cart.length < 1}
								className={`px-4 py-2 rounded-lg tracking-wide  ${
									cart.length < 1
										? "bg-gray-300 text-white"
										: "bg-rose-900 text-rose-100 "
								}`}
							>
								checkout
							</button>
						</Link>
					</div>

					{cart.length > 0 ? (
						<div className="mt-4">{itemsInCartElement}</div>
					) : (
						<div className="mt-4 font-thin text-center text-gray-400">
							your cart is empty!
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default CartPopout;

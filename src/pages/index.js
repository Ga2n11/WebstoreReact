import * as React from "react";

import Carousel from '../components/SliderArea';
import Header from '../components/Header';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Products from '../components/Products';
import Dummy from '../dummy_data.json';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
	faUser,
	faHeart,
	faSignInAlt,
	faCreditCard,
	faShoppingCart
} from '@fortawesome/free-solid-svg-icons';
library.add(faUser, faHeart, faSignInAlt, faCreditCard, faShoppingCart);

function App() {
	return (
		<>
			<Header />
			<Logo />
			<Navigation location="/" />
			<Products
				variant="list"
				products={Dummy.products.sort(
					({rating}, other) => rating - other.rating
				).slice(0, 3)}
			/>
			<Carousel {...Dummy} />
		</>
	);
}

export default App;

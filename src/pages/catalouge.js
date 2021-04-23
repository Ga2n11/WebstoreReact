import * as React from "react";
import Carousel from '../components/SliderArea';
import Products from '../components/Products';
import Logo from '../components/Logo';
import Dummy from '../dummy_data.json';
import Header from '../components/Header';
import Navigation from '../components/Navigation';


const ProductsPage = () => (
	<>
	<Header />
	<Logo />
	<Navigation location="/catalouge"/>
	<Carousel {...Dummy} />
		<Products
			products={Dummy.products}
			className="flex-wrap"
			itemProps={{
				className: "w-25"
			}}
		/>
	</>
);

export default ProductsPage;
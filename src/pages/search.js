import * as React from "react";
import Logo from '../components/Logo';
import Search from '../components/Search';
import Dummy from '../dummy_data.json';
import Navigation from '../components/Navigation';

const SearchPage = () => (
	<>
	<Logo />
	<Navigation location="/search"/>
	<Search {...Dummy} />
	</>
);

export default SearchPage;
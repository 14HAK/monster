import React from 'react';
import AsideLeft from '../components/AsideLeft';
import AsideRight from '../components/AsideRight';
import Footer from '../components/Footer';
import MainSection from '../components/MainSection';
import Navbar from '../components/Navbar';
import './Home.css';

const Home = (): React.ReactElement => {
	return (
		<div className="grid-container">
			<header className="header">
				<Navbar />
			</header>
			<main className="main">
				<aside className="aside-left">
					<AsideLeft></AsideLeft>
				</aside>
				<section className="content">
					<MainSection />
				</section>
				<aside className="aside-right">
					<AsideRight></AsideRight>
				</aside>
			</main>
			<footer className="footer">
				<Footer />
			</footer>
		</div>
	);
};

export default Home;

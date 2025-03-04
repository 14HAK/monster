import React from 'react';
import { FaBarcode } from 'react-icons/fa';
import Wiki from '../assets/wiki.png';
import navManuItems, { ManuItems } from '../data/data';
import style from './componentStyle.module.css';
import ManuItem from './ManuItem';

const Navbar = (): React.ReactElement => {
	return (
		<>
			<header className={style.header}>
				<div className={style.manuLeft}>
					<span>
						<FaBarcode size={30} color="#2b2b2b" />
					</span>
					<img src={Wiki} width={150} alt="wikipedia logo" />
				</div>
				<div>
					<ul className={style.manu}>
						{navManuItems?.map((item: ManuItems, index: number) => (
							<ManuItem key={`navItem:${index}`} data={item} />
						))}
					</ul>
				</div>
			</header>
		</>
	);
};

export default Navbar;

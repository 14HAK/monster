import React from 'react';
import { ManuItems } from '../data/data';

interface ManuItemsProps {
	data: ManuItems;
}

const ManuItem = ({ data }: ManuItemsProps): React.ReactElement => {
	const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
		e.preventDefault();
	};

	return (
		<li>
			<a href={data.name} onClick={handleClick}>
				<span
					style={{
						paddingRight: '0.2rem',
						fontSize: '1rem',
						display: 'inline-flex',
						justifyContent: 'center',
					}}>
					{React.createElement(data?.icon)}
				</span>
				{data.name}
			</a>
		</li>
	);
};

export default ManuItem;

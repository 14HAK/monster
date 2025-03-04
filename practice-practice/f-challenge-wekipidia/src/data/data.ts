import { IconType } from 'react-icons';
import {
	FaDonate,
	FaExternalLinkAlt,
	FaExternalLinkSquareAlt,
} from 'react-icons/fa';

export interface ManuItems {
	icon: IconType;
	name: string;
}

const navManuItems: ManuItems[] = [
	{
		icon: FaDonate,
		name: 'Donate',
	},
	{
		icon: FaExternalLinkAlt,
		name: 'Create account',
	},
	{
		icon: FaExternalLinkSquareAlt,
		name: 'Log in',
	},
];

export default navManuItems;

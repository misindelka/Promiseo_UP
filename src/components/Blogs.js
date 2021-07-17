import Coast from '../assets/coast.jpg';
import Lighthouse from '../assets/lighthouse.jpg';
import CityRiver from '../assets/city-river.jpg';
import moment from 'momnet';

const currentDate = moment('20010704T120854').format('MMMM Do YYYY');

export const blogs = [
	{
		id: 1,
		title: 'Lorem ipsum dolor sit amet',
		date: currentDate,
		url: '#',
		img: Coast,
	},
	{
		id: 2,
		title: 'Ut enim ad minim veniam',
		date: currentDate,
		url: '#',
		img: Lighthouse,
	},
	{
		id: 3,
		title: 'Duis aute irure dolor in',
		date: currentDate,
		url: '#',
		img: CityRiver,
	},
];

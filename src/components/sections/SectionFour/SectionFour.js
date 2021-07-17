import * as React from 'react';
import { Card } from './card';
import { blogs } from '../../Blogs';
import './SectionFour.css';

export const SectionFour = () => (
	<div className="wrapper-four">
		<h1 className="heading">Blog</h1>
		<div className="cards-container">
			{blogs.map((blog) => (
				<Card key={blog.id} data={blog} />
			))}
		</div>
	</div>
);

import React from 'react';
import { Link } from 'react-router-dom';

interface SearchResultBlogProps {
	title: string;
	author: string;
	blogId: string;
	image: string;
	onNavigateToBlog: (blogId: { blogId: string }) => void;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultBlog: React.FC<SearchResultBlogProps> = ({
	title,
	author,
	blogId,
	image,
	onNavigateToBlog,
  setSearchQuery
}) => {
	const handleOnClick = () => {
		onNavigateToBlog({ blogId });
    setSearchQuery(''); // Clear search input
	};

	return (
		<div className='col-md-4 mb-4' onClick={handleOnClick}>
			<div className='card h-100 shadow-sm d-flex flex-row'>
				<img
					src={image || 'https://via.placeholder.com/150'}
					className='card-img-left img-fluid'
					alt='Blog Image'
					style={{ width: '150px', height: 'auto' }}
				/>
				<div className='card-body'>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>Author: {author}</p>
				</div>
			</div>
		</div>
	);
};

export default SearchResultBlog;

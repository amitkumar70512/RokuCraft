import React from 'react';
import { Link } from 'react-router-dom';

interface SearchResultBlogProps {
	title: string;
	author: string;
	blogId: string;
	image: string;
  summary: string;
	onNavigateToBlog: (blogId: { blogId: string }) => void;
	setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultBlog: React.FC<SearchResultBlogProps> = ({
	title,
	author,
	blogId,
	image,
  summary,
	onNavigateToBlog,
	setSearchQuery,
}) => {
	const handleOnClick = () => {
		onNavigateToBlog({ blogId });
		setSearchQuery(''); // Clear search input
	};

	return (
		<div className='col-md-12 mb-4 search-result-blog' onClick={handleOnClick}>
			<div className='card h-100 shadow-sm d-flex flex-row'>
				<div className='d-flex' style={{ width: '20%' }}>
					<img
						src={image || 'https://via.placeholder.com/150'}
						className='card-img-left img-fluid'
						alt='Blog Image'
						style={{ width: '100%', height: '100%', objectFit: 'cover' }}
					/>
				</div>
				<div
					className='card-body d-flex flex-column justify-content-center'
					style={{ width: '80%' }}
				>
					<h5 className='card-title'>{title}</h5>
					<p className='card-text'>Author: {author}</p>
          <p className='card-summary text-muted' style={{ color: '#6c757d' }}>{summary}</p>
				</div>
			</div>
		</div>
	);
};

export default SearchResultBlog;

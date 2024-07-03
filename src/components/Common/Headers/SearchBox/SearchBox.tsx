import React, { useState, useEffect, useCallback } from 'react';
import { getFilteredBlogs } from '../../../../firebase/blogs';
import SearchInput from './SearchInput';
import { Blog } from '../../../../firebase/interface';
import debounce from 'lodash.debounce';
import SearchResultBlog from './SearchResultBlog';
import { useNavigate } from 'react-router-dom';
import './SearchBox.css';

const SearchBox: React.FC = () => {
	const [results, setResults] = useState<Blog[]>([]);
	const [loading, setLoading] = useState(false);
	const [noResults, setNoResults] = useState(false);
	const [searchQuery, setSearchQuery] = useState('');
	const navigate = useNavigate();

	const handleSearch = async (query: string) => {
		setLoading(true);
		try {
			const response = await getFilteredBlogs({ title: query });
			console.log('Searching');
			setResults(response);
			setNoResults(response.length === 0);
		} catch (error) {
			console.error('Error fetching search results:', error);
			setResults([]);
			setNoResults(true);
		} finally {
			setLoading(false);
		}
	};

	const debouncedHandleSearch = useCallback(
		debounce((query: string) => {
			handleSearch(query);
		}, 500),
		[]
	);

	const handleInputChange = (query: string) => {
		setSearchQuery(query); // Update search query state

		if (query.length > 2) {
			debouncedHandleSearch(query);
		} else {
			setResults([]);
			setNoResults(false);
		}
	};

	const navigateToBlog = (blogId: { blogId: string }) => {
		console.log('Navigating to blog:', blogId.blogId);
		navigate(`./blog/show/${blogId.blogId}`);
		setResults([]);
		setSearchQuery(''); // Clear search input
	};

	return (
		<div className='d-flex flex-column justify-content-center align-items-center p-3 bg-light'>
			<SearchInput value={searchQuery} onSearch={handleInputChange} />
				{loading ? (
					<div>Loading...</div>
				) : noResults ? (
					<div>No results found</div>
				) : (
					results.map((result, index) => (
							<SearchResultBlog
								title={result.title}
								image={result.image}
								author={result.author}
								blogId={result.blogId}
								onNavigateToBlog={navigateToBlog}
								setSearchQuery={setSearchQuery}
							/>
					))
				)}
		</div>
	);
};

export default SearchBox;

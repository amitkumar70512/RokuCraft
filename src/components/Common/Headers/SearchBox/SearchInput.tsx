import React from 'react';
import { useState } from 'react';

interface SearchInputProps {
	onSearch: (query: string) => void;
  value: string;
}

const SearchInput: React.FC<SearchInputProps> = ({ value, onSearch }) => {
	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const query = e.target.value;
		onSearch(query);
	};

	return (
		<div className='input-group'>
			<input
				type='text'
				className='form-control'
				value={value}
				onChange={handleInputChange}
				placeholder='Search...'
			/>
		</div>
	);
};

export default SearchInput;

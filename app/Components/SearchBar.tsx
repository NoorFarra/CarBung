"use client"
import React, { useState } from 'react';

interface SearchBarProps {
  onSearch: (searchFilter: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchFilter, setSearchFilter] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchFilter(value);
    onSearch(value); 
  }

  return (
    <div className='bg-white flex justify-center items-center w-full h-[6vh]'>
      <input
        type="text"
        value={searchFilter}
        className='bg-slate-200 w-[95%] h-[80%] border border-spacing-6 border-black rounded-3xl border-separate text-sm font-semibold text-blue-400 text-center'
        placeholder='Find What You Want...'
        onChange={handleInputChange}
      />
    </div>
  );
}

export default SearchBar;

import React from 'react';
import { useAppContext } from '../AppContext';

const Search: React.FC = () => {
  const { searchQuery, setSearchQuery } = useAppContext();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
    </div>
  );
};

export default Search;
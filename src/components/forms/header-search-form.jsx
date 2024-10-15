'use client';
import { useState } from 'react';
// internal
import useSearchFormSubmit from '@/hooks/use-search-form-submit';

const HeaderSearchForm = () => {
  const { setSearchText, handleSubmit, searchText } = useSearchFormSubmit();

  return (
    <form onSubmit={handleSubmit} className="tp-header-search-form">
      <div className="tp-header-search-wrapper">
        <input
          onChange={e => setSearchText(e.target.value)}
          value={searchText}
          type="text"
          placeholder="Search for products..."
          className="tp-header-search-input"
        />
        <button type="submit" className="tp-header-search-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default HeaderSearchForm;

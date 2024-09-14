import React from 'react';

const KnowMoreButton = () => {
  return (
    <button className="flex items-center gap-2.5 px-4 py-3 rounded-lg border-none overflow-hidden bg-primary text-white transition-all duration-300 hover:bg-secondary">
      <p className="translate-x-3.5 text-lg font-bold transition-transform duration-300 button-text">
        Know More
      </p>
      <p className="translate-y-8 transition-transform duration-300 iconer">
        <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path
            d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
            fill="currentColor"
          ></path>
        </svg>
      </p>
    </button>
  );
};

export default KnowMoreButton;

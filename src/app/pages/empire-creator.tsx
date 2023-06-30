import React from 'react';

const empireNavBar = () => {
  return (
    <div className="flex flex-col bg-253C35">
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold">Species</h2>
        <button className="text-white">Appearance</button>
        <button className="text-white">Species Name</button>
        <button className="text-white">Name Lists</button>
        <button className="text-white">Traits</button>
      </div>
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold">Homeworld</h2>
        <button className="text-white">Name & Class</button>
        <button className="text-white">City Appearance</button>
      </div>
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold">Empire</h2>
        <button className="text-white">Origin</button>
        <button className="text-white">Government & Ethics</button>
        <button className="text-white">Advisor Voice</button>
        <button className="text-white">Empire Name</button>
        <button className="text-white">Flag</button>
        <button className="text-white">Ship Appearance</button>
      </div>
      <div className="p-4">
        <h2 className="text-white text-lg font-semibold">Ruler</h2>
        <button className="text-white">Ruler Appearance</button>
        <button className="text-white">Ruler Traits</button>
      </div>
    </div>
  );
};

export default empireNavBar;

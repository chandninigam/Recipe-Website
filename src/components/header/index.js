import React from 'react';
// import "./scss/header.css";
export const Header = () => {
  return (
    <div class="navbar">
      <div className="header">
        <div className="heading">Dressing Recipe</div>
        <div className="container-list">
          <ul className="list">
            <li>Home</li>
            <li>List of Recipes</li>
            <li>About</li>
            <li>
              <span class="material-icons">search</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

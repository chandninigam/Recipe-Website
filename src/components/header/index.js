import React from 'react';
// import "./scss/header.css";
export const Header = () => {
  function onClickMenu() {
    console.log('i am clicked');
    const ulList = document.querySelector('ul');
    if (ulList.style.display === 'none') {
      ulList.style.display = 'flex !important';
    } else {
      ulList.style.display = 'none !important';
    }
  }
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
              <span className="material-icons">search</span>
            </li>
          </ul>
          <div className="menuOuterContainer">
            <span className="material-icons menu" onClick={onClickMenu}>
              menu
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

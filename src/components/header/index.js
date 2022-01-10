import React from 'react';
// import "./scss/header.css";
export const Header = () => {
  function onClickMenu() {
    console.log('i am clicked');
    const menuList = document.querySelector('.menu');
    // ulList.forEach((each) => {
    if (menuList.style.display === 'none') {
      menuList.style.display = 'flex';
      // menuList.classList.add('active');
    } else {
      menuList.style.display = 'none';
      // menuList.classList.remove('active');
    }
  }
  return (
    <div class="navbar">
      <div className="header">
        <div className="heading">Dressing Recipe</div>
        <div className="container-list">
          <div className="menu">
            <ul className="list">
              <li>Home</li>
              <li>List of Recipes</li>
              <li>About</li>
              <li>
                <span className="material-icons">search</span>
              </li>
            </ul>
          </div>
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

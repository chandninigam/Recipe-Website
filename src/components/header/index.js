import React from "react";
// import "./scss/header.css";
export const Header = () => {
	return (
		<div>
			<div className="header">
				<div className="heading">Tasty Food</div>
				<div className="container-list">
					<ul className="list">
						<li>Home</li>
						<li>Recipes</li>
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
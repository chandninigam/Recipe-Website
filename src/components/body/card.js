// import react from "react";
export const Card = () => {
  return (
    <div className="cardContainer">
      <div className="cardContent">
        <div className="cardTitle">Rosgulla</div>
        <div className="cardDesc">
          Rename your local branch: If you are on the branch you want to rename:
          git branch -m new-name. .
        </div>
      </div>
      <div className="cardImg">
        <img src="../Image/foodHome.jpg" alt="img" />
      </div>
    </div>
  );
};

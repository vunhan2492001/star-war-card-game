import React, { useState } from "react";
import "./index.css";
import Computer from "./Computer_card";
import User from "./User_card";

const Home = () => {
  const [isComputerShaking, setIsComputerShaking] = useState(false);

  const handleCardUserClick = () => {
    setIsComputerShaking(true);
    setTimeout(() => setIsComputerShaking(false), 500);
  };
  return (
    <div className="my-home-container">
      <div className="my-logo-class">
        <img
          className="my-logo"
          src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png"
          alt=""
        />
      </div>
      <div className="my-info-score">
        <div className="my-user">
          <div className="my-name my-user-name">
            <h3>User</h3>
          </div>
          <div className="my-score my-user-score">
            <h4>100</h4>
          </div>
        </div>
        <div className="my-computer">
          <div className="my-name my-computer-name">
            <h3>Computer</h3>
          </div>
          <div className="my-score my-computer-score">
            <h4>100</h4>
          </div>
        </div>
      </div>
      <div className="my-round">
        <div className="my-round-title">
          <h3>Round</h3>
        </div>
        <div className="my-round-count">
          <h4>8/10</h4>
        </div>
      </div>
      <div className="my-card-container">
        <div>
          <User onClick={handleCardUserClick} />
        </div>
        <div>
          <Computer isShaking={isComputerShaking} />
        </div>
      </div>
    </div>
  );
};

export default Home;

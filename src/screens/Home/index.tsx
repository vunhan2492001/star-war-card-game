import React, { useState } from "react";
import "./index.css";

const Home = () => {
  const [isShaking, setIsShaking] = useState(false);

  const handleCardUserClick = () => {
    setIsShaking(true);
    setTimeout(() => setIsShaking(false), 500);
  };
  return (
    <div className="container">
      <div className="logo-class">
        <img
          className="logo"
          src="https://i.pinimg.com/originals/b6/af/5a/b6af5aeff0ee43a4253fc70c167bb6db.png"
          alt=""
        />
      </div>
      <div className="info-score">
        <div className="user">
          <div className="name user-name">
            <h3>User</h3>
          </div>
          <div className="score user-score">
            <h4>100</h4>
          </div>
        </div>
        <div className="computer">
          <div className="name computer-name">
            <h3>Computer</h3>
          </div>
          <div className="score computer-score">
            <h4>100</h4>
          </div>
        </div>
      </div>
      <div className="round">
        <div className="round-title">
          <h3>Round</h3>
        </div>
        <div>
          <h3>8/10</h3>
        </div>
      </div>
      <div className="card-container">
        <div className="card card-user">
          <div className="info info-user-name">Name</div>
          <div className="info info-img info-img-user">
            <img src="" alt="" />
          </div>
          <div className="info info-user" onClick={handleCardUserClick}>
            Maximum speed <span>?</span>
          </div>
          <div className="info info-user" onClick={handleCardUserClick}>
            Cost in credits<span>?</span>
          </div>
          <div className="info info-user" onClick={handleCardUserClick}>
            Number of passengers<span>?</span>
          </div>
          <div className="info info-user" onClick={handleCardUserClick}>
            Films<span>?</span>
          </div>
        </div>
        <div className={`card card-computer ${isShaking ? "shake" : ""}`}>
          <div className="info info-computer-name">Name</div>
          <div className="info info-img info-img-computer">
            <img src="" alt="" />
          </div>
          <div className="info info-computer">
            Maximum speed<span>?</span>
          </div>
          <div className="info info-computer">
            Cost in credits<span>?</span>
          </div>
          <div className="info info-computer">
            Number of passengers<span>?</span>
          </div>
          <div className="info info-computer">
            Films<span>?</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

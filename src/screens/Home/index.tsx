import React, { useState } from "react";
import "./index.css";
import Card from "./Card";
import Round from "./Round";


const Home = () => {

  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleCardUserClick = () => {
    console.log("Clicked!");

  };

  const handlePlayMusic = () => {
    const audioElement = document.getElementById('background-music') as HTMLAudioElement;
    console.log(audioElement);
    audioElement.play();
    setIsMusicPlaying(true);
  };

  return (
    <div className="my-home-container">
      <audio id="background-music" loop>
        <source src="./sound/home.mp3" type="audio/mpeg" />
      </audio>
      <button onClick={handlePlayMusic}>Play Music</button>
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
      <Round title="Round" count="8" />
      <div className="my-card-container">
        <Card type="user" onClick={handleCardUserClick} clickable={true} />
        <Card type="computer" clickable={false} />
      </div>
    </div>
  );
};

export default Home;

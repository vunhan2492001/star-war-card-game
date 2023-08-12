import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import Card from "./Card";
import Round from "./Round";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../Assets/sound/home.mp3";
const Home = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();
  const username = location.state?.username || "User";
  const [clickedItems, setClickedItems] = useState<number[]>([]);

  const handleCardUserClick = () => {
    console.log("Clicked!");
  };

  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        console.log("played");
        setIsMusicPlaying(true);
      } else {
        audioRef.current.pause();
        console.log("paused");
        setIsMusicPlaying(false);
      }
    }
  };

  // const handlePlayMusic = () => {
  //   const audioElement = document.getElementById(
  //     "background-music"
  //   ) as HTMLAudioElement;
  //   console.log(audioElement);
  //   audioElement.play();
  //   setIsMusicPlaying(true);
  // };

  return (
    <div className="my-home-container">
      <audio ref={audioRef} loop autoPlay>
        <source src={music} type="audio/mp3" />
      </audio>
      <button onClick={handlePlayMusic}>
        {isMusicPlaying ? <FaVolumeUp /> : <FaVolumeMute />}
      </button>
      {""}
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
            <h3>{username}</h3>
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
        <Card
          type="user"
          onClick={handleCardUserClick}
          clickable={true}
          clickedItems={clickedItems}
          onClickItem={(id) => setClickedItems((prev) => [...prev, id])}
        />
        <Card type="computer" clickable={false} clickedItems={clickedItems} />
      </div>
    </div>
  );
};

export default Home;

import React, { useState, useRef } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import Card from "./Card";
import Round from "./Round";
import { FaVolumeUp, FaVolumeMute } from "react-icons/fa";
import music from "../Assets/sound/home.mp3";
import axiosInstance from "../../service";
import { useEffect } from "react";
import Button from "react-bootstrap/esm/Button";
import Modal from "antd/es/modal/Modal";


interface StarShipData {
  name: string;
  max_atmosphering_speed: string;
  cost_in_credits: string;
  passengers: string;
  films: string[];
}

const Home = () => {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const location = useLocation();
  const username = location.state?.username || "User";
  const [clickedItems, setClickedItems] = useState<number[]>([]);
  const [isFinish, setIsFinish] = useState(false);
  //state for scores
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);
  // state for count
  const [createCount, setCreateCount] = useState<number>(1);
  const [starShipData, setStarShipData] = useState<[StarShipData | null, StarShipData | null]>([null, null]);
  const [usedIds, setUsedIds] = useState<number[]>([]);

  const ids = [
    2, 3, 5, 9, 10, 11, 12, 13, 17, 22, 27, 28, 31, 32, 39, 40, 43, 59, 66, 68,
  ];

  useEffect(() => {
    getRandomStarShips();
  }, []);

  const getRandomStarShips = async () => {
    try {
      let randomId1 = getRandomUniqueId();
      let randomId2 = getRandomUniqueId();
      const starShipResponse1 = await axiosInstance.get(`/${randomId1}`);
      const starShipResponse2 = await axiosInstance.get(`/${randomId2}`);
      setStarShipData([starShipResponse1.data, starShipResponse2.data]);
      setUsedIds([...usedIds, randomId1, randomId2]);
    } catch (error) {
      console.error("Error fetching random starships:", error);
    }
  };

  const getRandomUniqueId = () => {
    let randomId = ids[Math.floor(Math.random() * ids.length)];
    while (usedIds.includes(randomId)) {
      randomId = ids[Math.floor(Math.random() * ids.length)];
    }
    return randomId;
  };

  const handleCardUserClick = (data:number[]) => {
  };
  const handleCardItemClick=(data:number) =>{
    if(starShipData[0] && starShipData[1] ){
      if(starShipData[0].max_atmosphering_speed==='unknown' || starShipData[0].max_atmosphering_speed==='n/a')
        {
          starShipData[0].max_atmosphering_speed='0';
        }
        if(starShipData[0].cost_in_credits==='unknown' || starShipData[0].cost_in_credits==='n/a')
        {
          starShipData[0].cost_in_credits='0';
        }
        if(starShipData[0].passengers==='unknown' || starShipData[0].passengers==='n/a')
        {
          starShipData[0].passengers='0';
        }
        if(starShipData[1].max_atmosphering_speed==='unknown' || starShipData[1].max_atmosphering_speed==='n/a')
        {
          starShipData[1].max_atmosphering_speed='0';
        }
        if(starShipData[1].cost_in_credits==='unknown' || starShipData[1].cost_in_credits==='n/a')
        {
          starShipData[1].cost_in_credits='0';
        }
        if(starShipData[1].passengers==='unknown' || starShipData[1].passengers==='n/a')
        {
          starShipData[1].passengers='0';
        }
      if(data==0){
        if(parseInt(starShipData[0].max_atmosphering_speed)>parseInt(starShipData[1].max_atmosphering_speed)){
          setUserScore(userScore+1);
        }
        else if (parseInt(starShipData[1].max_atmosphering_speed)>parseInt(starShipData[0].max_atmosphering_speed)){
          setComputerScore(computerScore+1);
        }
      }
      if(data==1){
        if(parseInt(starShipData[0].cost_in_credits)>parseInt(starShipData[1].cost_in_credits)){
          setUserScore(userScore+1);
        }
        else if (parseInt(starShipData[1].cost_in_credits)>parseInt(starShipData[0].cost_in_credits)){
          setComputerScore(computerScore+1);
        }
      }
      if(data==2){
        if(parseInt(starShipData[0].passengers)>parseInt(starShipData[1].passengers)){
          setUserScore(userScore+1);
        }
        else if (parseInt(starShipData[1].passengers)>parseInt(starShipData[0].passengers)){
          setComputerScore(computerScore+1);
        }
      }
      if(data==3){
        if(parseInt(starShipData[0].films.length.toString())>parseInt(starShipData[1].films.length.toString())){
          setUserScore(userScore+1);
        }
        else if (parseInt(starShipData[1].films.length.toString())>parseInt(starShipData[0].films.length.toString())){
          setComputerScore(computerScore+1);
        }
      }
    }
  } 
  const changeRound = () => {
    if(createCount==10){
      setIsFinish(true);
    }
    else{      
      setClickedItems([]);
      getRandomStarShips();
      setCreateCount(createCount+1);
    }
  }
  const handlePlayMusic = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play();
        setIsMusicPlaying(true);
      } else {
        audioRef.current.pause();
        setIsMusicPlaying(false);
      }
    }
  };
  const makeNewGame = () => {
    setClickedItems([]);
    getRandomStarShips();
    setCreateCount(0);
    setIsFinish(false);
    setUserScore(0);
    setComputerScore(0);
  }

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
            <h4>{userScore}</h4>
          </div>
        </div>
        <div className="my-computer">
          <div className="my-name my-computer-name">
            <h3>Computer</h3>
          </div>
          <div className="my-score my-computer-score">
            <h4>{computerScore}</h4>
          </div>
        </div>
      </div>
      <Round count={createCount} />
      <div className="next-btn-container">
        <Button onClick={()=>changeRound()} className="next-btn">{createCount==10 ? 'FINISH' : 'NEXT ROUND'}</Button>
      </div>
      <div className="my-card-container">
        <Card
          type="user"
          onClickItem={(id) => setClickedItems((prev) => [...prev, id])}
          clickable={true}
          clickedItems={clickedItems}
          starShipData={starShipData[0]}
          onClick={(id)=>handleCardUserClick(id)}
          isItemClicked={(data)=> handleCardItemClick(data)}
        />
        <Card type="computer" clickable={false} clickedItems={clickedItems} starShipData={starShipData[1]} isItemClicked={()=>{}} />
      </div>
      <Modal
        centered
        footer={
          <Button className="new-game-btn" onClick={()=> makeNewGame()}>New Game</Button>
        }
        open={isFinish}
        closeIcon={null}
        width={400}
        title={userScore > computerScore ? (
          <p className="notify-header">You Win</p>
        ) : userScore < computerScore ? (
          <p className="notify-header">You Lose</p>
        ) : (
          <p className="notify-header">It's a Tie</p>
        )}
      />
    </div>
  );
};

export default Home;

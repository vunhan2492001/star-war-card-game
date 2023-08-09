import React, { useState, useEffect } from "react";
import axiosInstance from "../../../service";
import myPic from "../../../images/tau2.png"
interface InfoData {
  label: string;
  value: string;
}

interface StarShipData {
  name: string;
  max_atmosphering_speed: string;
  cost_in_credits: string;
  passengers: string;
  films: string[];
}

interface CardProps {
  type: string;
  onClick?: () => void;
  clickable: boolean;
}

const Card = ({ type, onClick, clickable }: CardProps) => {
  const [starShipData, setStarShipData] = useState<StarShipData | null>(null);
  const [usedIds, setUsedIds] = useState<number[]>([]);

  const ids = [
    2, 3, 5, 9, 10, 11, 12, 13, 17, 22, 27, 28, 31, 32, 39, 40, 43, 59, 66, 68,
  ];

  useEffect(() => {
    getRandomStarShip();
  }, []);

  const getRandomStarShip = async () => {
    try {
      let randomId = getRandomUniqueId();
      const starShipResponse = await axiosInstance.get(`/${randomId}`);
      setStarShipData(starShipResponse.data);
      setUsedIds([...usedIds, randomId]);
    } catch (error) {
      console.error("Error fetching random starship:", error);
    }
  };

  const getRandomUniqueId = () => {
    let randomId = ids[Math.floor(Math.random() * ids.length)];
    while (usedIds.includes(randomId)) {
      randomId = ids[Math.floor(Math.random() * ids.length)];
    }
    return randomId;
  };

  const handleCardClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const infoData: InfoData[] = [
    {
      label: "Max Speed",
      value: starShipData?.max_atmosphering_speed || "Loading...",
    },
    {
      label: "Credit Cost",
      value: starShipData?.cost_in_credits || "Loading...",
    },
    { label: "Passenger", value: starShipData?.passengers || "Loading..." },
    {
      label: "Film Appearances",
      value: starShipData?.films.length.toString() || "Loading...",
    },
  ];

  return (
    <div className={`my-card my-card-${type}`} onClick={handleCardClick}>
      <div className={`my-info my-info-${type}-name`}>
        {starShipData?.name || "Loading..."}
      </div>
      <div className={`my-info my-info-img my-info-img-${type}`}>
        <img className="my-img" src= {myPic} alt="Image of Starship" />

      </div>
      {infoData.map((info, index) => (
        <div key={index} className={`my-info my-info-${type}`}>
          {info.label}
          <span>{info.value}</span>
        </div>
      ))}
    </div>
  );
};

export default Card;

import React, { useState, useEffect } from "react";
import axiosInstance from "../../../service";

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
  const [otherCardData, setOtherCardData] = useState<StarShipData | null>(null);

  useEffect(() => {
    getRandomStarShip();
  }, []);

  useEffect(() => {
    if (starShipData && otherCardData) {
      // Both card data have been loaded, you can proceed here
      console.log("Both card data loaded:", starShipData, otherCardData);
    }
  }, [starShipData, otherCardData]);

  const getRandomStarShip = async () => {
    try {
      let starShipResponse = null;
      let randomStarShipId = null;

      while (!starShipResponse) {
        randomStarShipId = Math.floor(Math.random() * 40) + 1;
        starShipResponse = await axiosInstance.get(`/${randomStarShipId}`);
      }

      setStarShipData(starShipResponse.data);
    } catch (error) {
      console.log("Error fetching random starship:", error);
    }
  };

  const handleCardClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const infoData: InfoData[] = [
    {
      label: "Max Speed",
      value: starShipData?.max_atmosphering_speed || "",
    },
    {
      label: "Credit Cost",
      value: starShipData?.cost_in_credits || "",
    },
    { label: "Passenger", value: starShipData?.passengers || "" },
    {
      label: "Film Appearances",
      value: starShipData?.films.length.toString() || "",
    },
  ];

  return (
    <div className={`my-card my-card-${type}`} onClick={handleCardClick}>
      <div className={`my-info my-info-${type}-name`}>
        {starShipData?.name || "Loading..."}
      </div>
      <div className={`my-info my-info-img my-info-img-${type}`}>
        <img src="" alt="Image of Starship" />
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

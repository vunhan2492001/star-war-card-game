import React from "react";
import { useState } from "react";

export interface InfoData {
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
  clickable: boolean;
  clickedItems: number[];
  onClick?: (data: number[]) => void;
  onClickItem?: (id: number) => void;
  starShipData: StarShipData | null;
  isItemClicked: (data:number)=> void;
}

const Card = ({
  type,
  onClick,
  clickable,
  clickedItems,
  onClickItem,
  starShipData,
  isItemClicked,
}: CardProps) => {
  const [imageIndex, setImageIndex] = useState<number>(0); // Index for selecting random image
  const [images, setImages] = useState<string[]>([
    require("../../../images/tau.png"),
    require("../../../images/tau1.png"),
    require("../../../images/tau2.png"),
    require("../../../images/tau3.png"),
  ]); // List of image paths
  const [dataToShow,setDataToShow]= useState<number[]>(clickedItems);
  const handleCardClick = () => {
    if (clickable && onClick) {
      // onClick(dataToShow);
      console.log(clickable)
    }
  };
  const isItemClickedCheck = (index:number) => {
    if (clickable && onClick) {
      isItemClicked(index);
      console.log(index)
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
        <img
          className="my-img"
          src={images[imageIndex]}
          alt="Image of Starship"
        />
      </div>
      {infoData.map((info, index) => (
        <div
          key={index}
          className={`my-info my-info-${type}`}
          onClick={() => {onClickItem && onClickItem(index); isItemClickedCheck(index) }}
        >
          {info.label}
          {clickable || clickedItems.includes(index) ? (
            <>
              <span>{info.value}</span>
            </>
          ) : (
            <span>?</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Card;

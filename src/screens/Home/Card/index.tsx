import React from "react";

interface CardProps {
  type: string;
  onClick?: () => void;
  clickable: boolean;
}

const Card = ({ type, onClick, clickable }: CardProps) => {
  const handleCardClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  const infoData = [
    "Maximum speed",
    "Cost in credits",
    "Number of passengers",
    "Films",
  ];

  return (
    <div className={`my-card my-card-${type}`} onClick={handleCardClick}>
      <div className={`my-info my-info-${type}-name`}>Name</div>
      <div className={`my-info my-info-img my-info-img-${type}`}>
        <img src="" alt="" />
      </div>
      {infoData.map((info, index) => (
        <div key={index} className={`my-info my-info-${type}`}>
          {info}
          <span>?</span>
        </div>
      ))}
    </div>
  );
};

export default Card;

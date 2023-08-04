import React, { useState } from "react";

const Card = ({ type, onClick, clickable }: any) => {
    const handleCardClick = () => {
        if (clickable) {
            onClick();
        }
    };

    return (
        <div
            className={`my-card my-card-${type}`}
            onClick={handleCardClick}
        >
            <div className={`my-info my-info-${type}-name`}>Name</div>
            <div className={`my-info my-info-img my-info-img-${type}`}>
                <img src="" alt="" />
            </div>
            <div className={`my-info my-info-${type}`}>Maximum speed<span>?</span></div>
            <div className={`my-info my-info-${type}`}>Cost in credits<span>?</span></div>
            <div className={`my-info my-info-${type}`}>Number of passengers<span>?</span></div>
            <div className={`my-info my-info-${type}`}>Films<span>?</span></div>
        </div>
    );
};

export default Card;

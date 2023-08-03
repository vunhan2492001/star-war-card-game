import React, { useState } from "react";

const User = ({ onClick }: any) => {
    const [isShaking, setIsShaking] = useState(false);

    const handleUserClick = () => {
        setIsShaking(true);
        onClick();
        setTimeout(() => setIsShaking(false), 500);
    };
    return (
        <div className="my-card my-card-user">
            <div className="my-info my-info-user-name">Name</div>
            <div className="my-info my-info-img my-info-img-user">
                <img src="" alt="" />
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Maximum speed <span>?</span>
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Cost in credits<span>?</span>
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Number of passengers<span>?</span>
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Films<span>?</span>
            </div>
        </div>
    )
}

export default User;
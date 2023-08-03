import React from "react";

const Computer = ({ isShaking }: any) => {
    return (

        <div className={`my-card my-card-computer ${isShaking ? "my-shake" : ""}`} >
            <div className="my-info my-info-computer-name">Name</div>
            <div className="my-info my-info-img my-info-img-computer">
                <img src="" alt="" />
            </div>
            <div className="my-info my-info-computer">
                Maximum speed<span>?</span>
            </div>
            <div className="my-info my-info-computer">
                Cost in credits<span>?</span>
            </div>
            <div className="my-info my-info-computer">
                Number of passengers<span>?</span>
            </div>
            <div className="my-info my-info-computer">
                Films<span>?</span>
            </div>
        </div>
    )
}

export default Computer;
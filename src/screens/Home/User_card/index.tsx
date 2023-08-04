import React, { useState, useEffect } from "react";

const User = ({ onClick }: any) => {
    const [isShaking, setIsShaking] = useState(false);
    const [starship, setStarship] = useState<any>(null);

    useEffect(() => {
        const fetchStarship = async () => {
            const response = await fetch('https://swapi.dev/api/starships/');
            const data = await response.json();
            const count = data.count;
            const random = Math.floor(Math.random() * count) + 1;
            const starshipResponse = await fetch(`https://swapi.dev/api/starships/${random}/`);
            const starshipData = await starshipResponse.json();
            setStarship(starshipData);
        }
        fetchStarship();
    }, []);

    const handleUserClick = () => {
        setIsShaking(true);
        onClick();
        setTimeout(() => setIsShaking(false), 500);
    };
    return (
        <div className="my-card my-card-user">
            <div className="my-info my-info-user-name">{starship?.name}</div>
            <div className="my-info my-info-img my-info-img-user">
                <img src="" alt="" />
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Maximum speed: {starship?.max_atmosphering_speed}
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Cost in credits: {starship?.cost_in_credits}
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Number of passengers: {starship?.passengers}
            </div>
            <div className="my-info my-info-user" onClick={handleUserClick}>
                Films: {starship?.films?.length}
            </div>
        </div>
    )
}

export default User;


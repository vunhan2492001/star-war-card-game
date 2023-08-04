import React, { useState, useEffect } from "react";

const Computer = ({ isShaking }: any) => {
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

    return (
        <div className={`my-card my-card-computer ${isShaking ? "my-shake" : ""}`} >
            <div className="my-info my-info-computer-name">{starship?.name}</div>
            <div className="my-info my-info-img my-info-img-computer">
                <img src="" alt="" />
            </div>
            <div className="my-info my-info-computer">
                Maximum speed: {starship?.max_atmosphering_speed}
            </div>
            <div className="my-info my-info-computer">
                Cost in credits: {starship?.cost_in_credits}
            </div>
            <div className="my-info my-info-computer">
                Number of passengers: {starship?.passengers}
            </div>
            <div className="my-info my-info-computer">
                Films: {starship?.films?.length}
            </div>
        </div>
    )
}

export default Computer;


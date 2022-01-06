import React, { useEffect } from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, setPlants, onDelete}) {
  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then(r => r.json())
      .then(setPlants)
  }, [setPlants])
  
  return (
    <ul className="cards">
      {
        plants.map(plant => 
        <PlantCard 
          key={plant.id} 
          plant={plant} 
          onDelete={onDelete} 
        />)
      }
    </ul>
  );
}

export default PlantList;

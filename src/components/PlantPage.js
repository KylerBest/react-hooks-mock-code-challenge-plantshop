import React, { useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([])
  const [search, setSearch] = useState("")

  function handleAddPlant(newPlant){
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type" : "application/json"},
      body: JSON.stringify(newPlant)
    })
      .then(r => r.json())
      .then(json => setPlants([...plants, json]))
  }

  function handleDeletePlant(id) {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE"
    })
      .then(setPlants(plants.filter(plant => plant.id !== id)))
  }

  const shownPlants = plants.filter(plant => 
    plant.name.toLowerCase().includes(search.toLowerCase())).sort(
      (a, b) => a.name.localeCompare(b.name))

  return (
    <main>
      <NewPlantForm 
        onAddPlant={handleAddPlant}
      />
      <Search 
        search={search}
        setSearch={setSearch}
      />
      <PlantList 
        onDelete={handleDeletePlant}
        plants={shownPlants}
        setPlants={setPlants}
      />
    </main>
  );
}

export default PlantPage;

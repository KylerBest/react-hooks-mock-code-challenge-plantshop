import React, { useState } from "react";

function NewPlantForm({onAddPlant}) {
  const [newPlant, setNewPlant] = useState({})

  function handleChange(e){
    setNewPlant({...newPlant, 
      [e.target.name]: e.target.type === "number" ? 
        parseFloat(e.target.value) :
        e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
    onAddPlant(newPlant)
  }

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;

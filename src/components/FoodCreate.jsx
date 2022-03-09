import React, { useState } from 'react'

function FoodCreate(props) {
    //!useSTate
    const [name,setName] = useState("")
    const [calories, setCalories] = useState(0)
    const [image, setImage] = useState("")

    const handleSubmit = (event) =>{
        event.preventDefault()
        props.addFood({name,calories,image})
    }
    const handleNameChange = (event) => setName(event.target.value)
    const handleCaloriesChange = (event)=> setCalories(event.target.value)
    const handleImageChange = (event)=> setImage(event.target.value)

  return (
    <div>
    <form onSubmit={handleSubmit}>
    
    <label htmlFor="name" type="text"></label>
    <input type="text" name="name" value={name} onChange={handleNameChange}/>
    <label htmlFor="calories" type="number" ></label>
    <input type="number" name="calories" value={calories}onChange={handleCaloriesChange}/>
    <label htmlFor="image" type="file"></label>
    <input type="url" name='image' value={image} onChange={handleImageChange} />
    <button type="submit">Add Food</button>




    </form>
    </div>
  )
}

export default FoodCreate
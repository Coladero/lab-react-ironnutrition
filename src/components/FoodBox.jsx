import React, { useState } from "react"


function FoodBox(props) {
    // console.log(props)
    const {image,name,calories} = props.eachFoodsProps
    // console.log(props.eachFoodsProps)
    const [quantity, setQuantity] = useState(0)


    const handleQuantity = (event) =>{
      setQuantity(event.target.value)
    }
    const handleSubmit = (event) =>{
      event.preventDefault()
      props.addCaloriesFood({image,name,calories,quantity})
    }


    return (
        <div>
        <img width="150px" src={[image]} alt="" />
        <p>{[name]}</p>
        <p>Calories: {[calories]} Cal</p>
        <form onSubmit={handleSubmit}>
      <input type="number" name="quantity" value={quantity} onChange={handleQuantity}/>
      <button>+</button>
      </form>

    </div>
  )
}

export default FoodBox
import React from 'react'

function TodaysFoods(props) {
    // console.log(props.caloriesFood)
    const total = props.caloriesFood.reduce((acc,eachCaloriesFood)=>{
        return acc + (eachCaloriesFood.quantity * eachCaloriesFood.calories)
      },0)

  return (
    <div>
        <h3>Today's foods</h3>
    <p> {props.caloriesFood.map((eachCaloriesFood)=>{
      const {name,quantity,calories} = eachCaloriesFood
      {/* console.log(eachCaloriesFood) */}
    return <p> {name}: {quantity} x {calories}: {quantity*calories}</p>
    
    })}
    </p>
    <p>Total: {total}</p>

    
    </div>
  )
}

export default TodaysFoods
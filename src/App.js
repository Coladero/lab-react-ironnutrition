import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import FoodCreate from './components/FoodCreate';
import TodaysFoods from './components/TodaysFoods';



function App() {
  //!useState
const [foodSt,setFoodSt] = useState(foods)
// console.log(foods)
const [caloriesFood, setCaloriesFood] = useState([])

  const addFood = (food) =>{
    setFoodSt([...foodSt,food])
  }

  const searchFood = (searchQuery) =>{
    const filterFood = foods.filter((eachFood)=>{
      return eachFood.name.includes(searchQuery)
    })
    setFoodSt(filterFood)
  }
  const addCaloriesFood = (foodToAdd)=>{
    setCaloriesFood([...caloriesFood,foodToAdd])
}


  return (
    <div className="App">
  <h1>Welcome to BurgerMania</h1>
  <div>
  <FoodCreate addFood={addFood}/>
    <Search searchFood={searchFood}/>
    {foodSt.map((eachFoods,index)=>{
      return(
        <FoodBox eachFoodsProps={eachFoods}  key={index} addCaloriesFood={addCaloriesFood}/>
      )
    })}
    <TodaysFoods caloriesFood={caloriesFood}/>

    </div>

    </div>
  );
}

export default App;

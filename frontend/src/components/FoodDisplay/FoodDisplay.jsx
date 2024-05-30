import React,{useContext} from 'react'
import "./FoodDisplay.css"
import { StoreContext } from '../../context/StoreContext';
import Fooditem from '../Fooditem/Fooditem';

const FoodDisplay = () => {
    const {food_list} = useContext(StoreContext);
    return (
    <div className='food-display' id="food-display"> 
      <h2>Top dishes for you</h2>
      <div className="food-display-list">
        {food_list.map((item,index) => {
            return <Fooditem key={index} id={item._id} name={item.name} price={item.price} description={item.description} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default FoodDisplay

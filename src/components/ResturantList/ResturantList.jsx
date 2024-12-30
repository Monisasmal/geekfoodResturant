import { useState } from "react";
import RestaurantCard from '../../components/ResturantCard/ResturantCard'
import list from '../Data/data'

import styles from "./ResturantList.module.css";

const RestaurantsList = () => {

    const [searchKey, setSearchKey] = useState("");
    const [minRating, setMinRating] = useState(0);

    const onSearchKeyChange = (e) => {
        setSearchKey(e.target.value);
    };

    const onRatingsChange = (e) => {
        setMinRating(Number(e.target.value));
    };

    const restaurantFilterFn = (restaurant) => {

        return (
            (restaurant.name.toLowerCase().includes(searchKey.toLowerCase())
                || restaurant.address.toLowerCase().includes(searchKey.toLowerCase()))
            && restaurant.rating >= minRating)
    };

    const restaurantMapFn = (restaurant) => <RestaurantCard key={restaurant._id} {...restaurant} />;

    return (
        <div >
            <form className={styles["filter-form"]}>
                <div className= {styles.search}>
                    <input onChange={onSearchKeyChange} type="text" placeholder="Search restaurants.." />
                </div>
                <div className={styles.rating}>
                    <label htmlFor="minRating"></label>
                    <input onChange={onRatingsChange} type="number" id="minRating" placeholder=" Minimum Rating: 0" />
                </div>
            </form>
            <div className={styles.container}>
                {
                    list
                        .filter(restaurantFilterFn)
                        .map(restaurantMapFn)
                }
            </div>
          
        </div>
    )
};

export default RestaurantsList;
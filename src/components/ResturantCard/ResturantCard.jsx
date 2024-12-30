import styles from "./ResturantCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot, faStar, faUtensils } from "@fortawesome/free-solid-svg-icons"

const RestaurantCard = (props) => {

    if (!props.name || !props.address) {
                 return null; 
           }
        
    const starsArr = [];
    for (let i = 0; i < 5; i++) {
        if (props.rating > i) {
            starsArr.push(true)
        } else {
            starsArr.push(false)
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles["main-info"]}>
                    <span>{props.name}</span>
                    <span>
                        {
                            starsArr.map((ele, index) => <FontAwesomeIcon key={`star_${index}`} className={ele ? styles.yellow : ""} icon={faStar} />)
                        }
                    </span>
                </div>
                <p> <FontAwesomeIcon className={styles.icon} icon={faLocationDot} />{props.address}</p>
                <span className={styles.pin}>{`${props.outcode} ${props.postcode}`}</span>
            </div>
            <div className={styles.body}>
                <div>
                    <span>
                        <FontAwesomeIcon className={styles.green} icon={faUtensils} />
                    </span>
                    {" "}
                    <span>{props.type_of_food}</span>
                </div>
                <a href="">Visit Menu</a>
            </div>
        </div>
    )
 };
export default RestaurantCard;
